import { HttpErrorResponse, HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap, throwError } from 'rxjs';




export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

  return next(req)
    .pipe(
      tap((event:HttpEvent<any>) => {
        if (event instanceof HttpResponse && req.method !== 'GET') {
          snackBar.open(`Success`, 'Close', {
            // panelClass: ['success-snackbar']
            verticalPosition: 'top',
            horizontalPosition: 'end'
          });
        }
      }),     
      catchError((error: HttpErrorResponse) => {
        snackBar.open(error.error.message, 'Close', {
          // panelClass: ['error-snackbar'],
          verticalPosition: 'top',
          horizontalPosition: 'end'
        })
        return throwError(() => error)
      })
    )   
};

