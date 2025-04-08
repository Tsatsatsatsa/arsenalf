import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  router = inject(Router)

  canActivate() {
    const isAuthenticated = localStorage.getItem('auth_token');

    if (!isAuthenticated) {
      this.router.navigate(['/sign-in']);
      return false;
    }
    return true;
  }
}
