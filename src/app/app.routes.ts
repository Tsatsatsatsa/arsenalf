import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { VideosComponent } from './components/videos/videos.component';
import { NewsDetailComponent } from './components/news/news-detail/news-detail.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './guards/auth-guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news/:id', component: NewsDetailComponent},
    { path: 'videos', component: VideosComponent },
    { path: 'sign-up', component: RegistrationComponent },
    { path: 'sign-in', component: LoginComponent },
    { path: 'user-profile', component: UserProfileComponent },
];
