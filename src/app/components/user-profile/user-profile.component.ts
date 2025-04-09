import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { CurrentUser } from '../../models/currentUser.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule,],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  private authService = inject(AuthService);
  private postService = inject(PostService);
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
    this.postService.createPost(this.postForm.value)
      .subscribe(el => console.log(el))
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/']);
  }

}
