import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
    if(localStorage.getItem('auth_token')) {
      this.isLoggedIn(localStorage.getItem('auth_token'))
    }
    
  }

  private apiUrl: string = 'http://localhost:3000/';
  private http = inject(HttpClient)

  private isLoggedInSubject = new BehaviorSubject<any>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();



  
  
  public signIn(credentials) {
    return this.http.post(this.apiUrl + 'auth/login', credentials).pipe(
      tap((response: any) => {
        this.isLoggedIn(response.access_token);
      })
    )
  }

  public signUp(userData) {
    return this.http.post(this.apiUrl + 'user', userData)
  }


  private setToken(token: string): void {
    localStorage.setItem('auth_token', token);
    // this.isLoggedInSubject.next(true)
  }

  public isLoggedIn(token): void {
    localStorage.setItem('auth_token', token);
    this.isLoggedInSubject.next(jwtDecode(localStorage.getItem('auth_token')))
    
  }

  public logout(): void {
    localStorage.removeItem('auth_token');
    this.isLoggedInSubject.next(false)
  }

  
}
