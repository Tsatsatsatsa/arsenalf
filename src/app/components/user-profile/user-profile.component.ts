import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NewsService } from '../news/news.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-user-profile',
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule,],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  private authService = inject(AuthService);
  private newsService = inject(NewsService);
  private router = inject(Router);

  fb = inject(FormBuilder);
  postForm: FormGroup;


  constructor() {
    this.postForm = this.fb.group({
      title: [''],
      shortDescription: [''],
      article: [''],
      imgUrl: ['https://example.com'],

    })
  }



  onSubmit(): void {
    this.newsService.createPost(this.postForm.value)
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/']);
  }

}
