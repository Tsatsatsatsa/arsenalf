import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INotification } from '../../../models/notification.interface';

@Component({
  selector: 'app-header-notification-modal',
  imports: [],
  templateUrl: './header-notification-modal.component.html',
  styleUrl: './header-notification-modal.component.scss'
})
export class HeaderNotificationModalComponent {

  @Input() notifications: INotification[];
  @Output() onCloseModal:EventEmitter<any> = new EventEmitter()


  closeModal(): void {
    this.onCloseModal.emit()
  }

}
