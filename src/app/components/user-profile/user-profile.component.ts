import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap} from 'rxjs';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { NewsService } from '../news/news.service';
import { TagService } from '../../services/tag.service';
import { ITag } from '../../models/tag.interface';

@Component({
  selector: 'app-user-profile',
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatAutocompleteModule, MatChipsModule, MatIconModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  private newsService = inject(NewsService);
  private tagService = inject(TagService);
  private fb = inject(FormBuilder);

  selectedOptions: string[] = [];
  filteredOptions: ITag[] = [];
  postForm: FormGroup;

  constructor() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      shortDescription: ['', Validators.required],
      article: ['', Validators.required],
      imgUrl: ['https://example.com', Validators.required],
      tag: ['', Validators.required]
    })
    this.onSearch()
  }

  onSearch(): void {
    this.postForm.get('tag').valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((el: string) => {
        if (!el.length || el.length < 3) {
          return of([])
        }
        return this.tagService.getTags(el)
      })
    ).subscribe((tag: ITag[]) => {
      this.filteredOptions = tag
    })
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedOptions.push(event.option.viewValue);
    this.filteredOptions.length = 0
  }

  remove(option: string): void {
    const index = this.selectedOptions.findIndex(el => el === option)
    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
    if (!this.selectedOptions.length) {
      this.filteredOptions.length = 0
    }
  }

  disabled(): void {
    this.filteredOptions.filter(option => !this.selectedOptions.includes(option.title))
  }

  onSubmit(): void {
    this.newsService.createPost(this.postForm.value).subscribe(el => console.log(el))
  }

}
