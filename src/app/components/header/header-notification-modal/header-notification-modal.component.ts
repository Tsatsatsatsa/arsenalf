import { Component, EventEmitter, HostListener, Input, OnInit, Output, inject } from '@angular/core';
import { INotification } from '../../../models/notification.interface';
import { NotificationService } from '../../notification/notification.service';

@Component({
  selector: 'app-header-notification-modal',
  imports: [],
  templateUrl: './header-notification-modal.component.html',
  styleUrl: './header-notification-modal.component.scss'
})
export class HeaderNotificationModalComponent {

  @Input() notifications: INotification[];
  @Output() onCloseModal: EventEmitter<any> = new EventEmitter();
  @Output() loadNotifications: EventEmitter<any> = new EventEmitter()


  closeModal(): void {
    this.onCloseModal.emit()
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    const position = target.scrollTop + target.offsetHeight;
    const height = target.scrollHeight;

    if (position === height) {
      this.loadNotifications.emit()
    }
  }

}
