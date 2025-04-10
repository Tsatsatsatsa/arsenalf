import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { TokenService } from './token.service';
import { CurrentUser } from '../models/currentUser.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl: string = 'http://localhost:3000/';
  private http: HttpClient = inject(HttpClient);
  private tokenService = inject(TokenService);
  private authStatus: BehaviorSubject<CurrentUser | null> = new BehaviorSubject<CurrentUser | null>(this.tokenService.decodeToken());

  constructor() {
    this.authStatus.next(this.tokenService.decodeToken())
  }


  signIn(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(this.apiUrl + 'auth/login', credentials).pipe(
      tap((response: any) => {
        this.handleAuthentication(response.access_token);
      })
    )
  }

  signUp(userData: { email: string, password: string, confirmPassword: string, userName: string }): Observable<any> {
    return this.http.post(this.apiUrl + 'user', userData).pipe(
      tap((response: any) => {
        this.handleAuthentication(response.access_token);
      })
    )
  }

  signOut(): void {
    localStorage.removeItem('auth_token');
    this.authStatus.next(null)
  }

  isAuthenticated(): Observable<CurrentUser | null> {
    return this.authStatus.asObservable();
  }

  private handleAuthentication(response: any): void {
    this.tokenService.setToken(response);
    this.authStatus.next(this.tokenService.decodeToken());
  }
}
