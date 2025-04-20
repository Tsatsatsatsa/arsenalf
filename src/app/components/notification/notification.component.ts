import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit{

  private notificationService = inject(NotificationService);


ngOnInit(): void {
}
  
}
