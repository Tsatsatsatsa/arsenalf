import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../notification/notification.service';
import { CurrentUser } from '../../models/current-user.interface';
import { INotification } from '../../models/notification.interface';
import { HeaderNotificationModalComponent } from './header-notification-modal/header-notification-modal.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, HeaderNotificationModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);
  private router = inject(Router);
  private page: number = 1;
  private pageSize: number = 5;
  private lastPage: number;

  notifications: INotification[] = [];
  showModal: boolean = false;
  currentUser$: Observable<CurrentUser>;
  currentUser: CurrentUser;
  total: number;

  ngOnInit(): void {
    this.currentUser$ = this.authService.isAuthenticated();
    this.getUnreadNotificationsTotal()
  }

  private getUnreadNotificationsTotal(): void {
    this.notificationService.getUnreadNotificationsTotal()
      .subscribe((total: number) => {
        this.total = total
      });
  }

  openModal(): void {
    this.loadMore();
    this.showModal = !this.showModal
  }

  loadMore(): void {
    if (this.page > this.lastPage) return

    this.notificationService.getNotifications(this.page, this.pageSize)
      .subscribe((response: { data: INotification[], meta: { total: number, page: number, last_page: number } }) => {
        if (response && this.page === 1) {
          this.getUnreadNotificationsTotal()
        }
        this.notifications.push(...response.data);
        this.lastPage = response.meta.last_page
        this.page++;
      })
  }

  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['/']);
  }
}
