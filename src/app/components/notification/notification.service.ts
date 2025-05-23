import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { INotification } from './../../models/notification.interface'
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly apiUrl: string = environment.apiUrl;
  private http = inject(HttpClient);

  getNotifications(page: number, pageSize: number): Observable<{ data: INotification[], meta: { total: number, page: number, last_page: number } }> {
    return this.http.get<{ data: INotification[], meta: { total: number, page: number, last_page: number } }>(`${this.apiUrl}notification?page=${page}&pageSize=${pageSize}`);
  }

  getUnreadNotificationsTotal(): Observable<number> {
    return this.http.get<number>(this.apiUrl + 'notification/total');
  }
}
