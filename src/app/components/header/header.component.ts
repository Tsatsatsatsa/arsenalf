import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
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

  notifications: INotification[] = [];
  showModal: boolean = false;
  currentUser$: Observable<CurrentUser>;
  currentUser: CurrentUser;

  ngOnInit(): void {
    this.currentUser$ = this.authService.isAuthenticated();
    this.notificationService.getNotifications()
      .subscribe((notifications: INotification[]) => {
        this.notifications = notifications;
      });
  }

}
