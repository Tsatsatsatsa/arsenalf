import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { TokenService } from './token.service';
import { CurrentUser } from '../models/current-user.interface';
import { environment } from '../../environments/environments';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl: string = environment.apiUrl;
  private http: HttpClient = inject(HttpClient);
  private tokenService = inject(TokenService);
  private authStatus: BehaviorSubject<CurrentUser | null> = new BehaviorSubject<CurrentUser | null>(null);

  constructor() {
    this.authStatus.next(this.tokenService.decodeToken());
  }


  signIn(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(this.apiUrl + 'auth/signin', credentials).pipe(
      tap((response: any) => {
        this.handleAuthentication(response.access_token);
      })
    )
  }

  signUp(userData: { email: string, password: string, confirmPassword: string, userName: string }): Observable<any> {
    return this.http.post(this.apiUrl + 'auth/signup', userData).pipe(
      tap((response: any) => {
        this.handleAuthentication(response.access_token);
      })
    )
  }

  signOut(): void {
    this.tokenService.removeToken();
    this.authStatus.next(null);
  }

  isAuthenticated(): Observable<CurrentUser | null> {
    return this.authStatus.asObservable();
  }

  private handleAuthentication(response: any): void {
    this.tokenService.setToken(response);
    this.authStatus.next(this.tokenService.decodeToken());
  }
}
