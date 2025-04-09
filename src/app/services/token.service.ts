import { Injectable } from "@angular/core";
import { jwtDecode } from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    private readonly TOKEN_KEY = 'auth_token';

    getToken(): string {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    setToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token)
    }

    removeToken(): void {
        localStorage.removeItem(this.TOKEN_KEY)
    }

    decodeToken(): any {
        const token = this.getToken();
        if (!token) return null;
        
        try {
          return jwtDecode(token);
        } catch (error) {
          console.error('Error decoding token:', error);
          return null;
        }
      }
}