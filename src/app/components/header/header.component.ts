import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { CurrentUser } from '../../models/current-user.interface';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  private authService = inject(AuthService);
  currentUser$: Observable<CurrentUser>;
  currentUser: CurrentUser;

  ngOnInit(): void {
    this.currentUser$ = this.authService.isAuthenticated();
  }

}
