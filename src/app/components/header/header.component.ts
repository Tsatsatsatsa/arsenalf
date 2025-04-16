import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { CurrentUser } from '../../models/current-user.interface';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);
  currentUser$: Observable<CurrentUser>;
  currentUser: CurrentUser;
notification

  ngOnInit(): void {
    this.currentUser$ = this.authService.isAuthenticated();
    this.notificationService.getNotifications()
    .subscribe(el => {
      this.notification = el
      console.log(this.notification)
    })
  }

}
