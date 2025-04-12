import { Routes } from "@angular/router";
import { NewsDetailComponent } from "./news-detail/news-detail.component";
import { NewsComponent } from "./news.component";




export const NEWS_ROUTES: Routes = [
    { path: '', component: NewsComponent },
    { path: ':id', component: NewsDetailComponent },
]