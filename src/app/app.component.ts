import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';



import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { LoginComponent } from './components/auth/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, AsideComponent, RegistrationComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private router = inject(Router);
 
  isRegistrationPage(): boolean {
    const authRoutes = ['/sign-up', '/sign-in'];
    if (authRoutes.some(route => this.router.url.includes(route))) {
      return true
    }
    return false
  }

}


