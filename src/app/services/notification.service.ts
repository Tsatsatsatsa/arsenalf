import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl: string = 'http://localhost:3000/';
  private http = inject(HttpClient);

  getNotifications() {
    return this.http.get(this.apiUrl + 'notification')

  }

}
