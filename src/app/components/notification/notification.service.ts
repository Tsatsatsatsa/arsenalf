import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { INotification } from './../../models/notification.interface'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl: string = 'http://localhost:3000/';
  private http = inject(HttpClient);

  getNotifications(): Observable<INotification[]> {
    return this.http.get<INotification[]>(this.apiUrl + 'notification')
  }

}
