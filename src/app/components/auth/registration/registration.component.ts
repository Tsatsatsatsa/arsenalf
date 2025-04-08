import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, CommonModule, RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {

  registrationForm: FormGroup;

  public fb = inject(FormBuilder);
  private authService = inject(AuthService)
  private snackBar = inject(MatSnackBar);
  router = inject(Router);

  constructor() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      userName: ['', [Validators.required, Validators.minLength(3)]],
    }, { validators: this.passwordMatchValidator });



  }


  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');


    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmPassword.setErrors(null);
      return null;
    }
  }

  onSubmit() {
    this.authService.signUp(this.registrationForm.value).subscribe({
      next: (response) => {
        console.log(response)
        this.snackBar.open(response['message'], 'Close', {
          verticalPosition: 'top',
          horizontalPosition: 'end'
        });

        this.router.navigate(['/sign-in']);
      },
      error: (error) => {
        console.error('Registration failed', error);
        this.snackBar.open(error.message, 'Close', {
          panelClass: ['success-snackbar'],
          verticalPosition: 'top',
          horizontalPosition: 'end'
        });
      }
    });
  }



}
