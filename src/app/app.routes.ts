import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideosComponent } from './components/videos/videos.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { LoginComponent } from './components/auth/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },

    {
        path: 'news', loadChildren: () => import('./components/news/news-route')
            .then(com => com.NEWS_ROUTES)
    },

    { path: 'videos', component: VideosComponent },
    { path: 'sign-up', component: RegistrationComponent },
    { path: 'sign-in', component: LoginComponent },
    { path: 'user-profile', component: UserProfileComponent },
];
