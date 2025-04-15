import { Component, inject } from '@angular/core';
import { NewsCardComponent } from '../news/news-card/news-card.component';
import { NewsService } from '../news/news.service';
import { IPost } from '../../models/post.interface';

@Component({
  selector: 'app-home',
  imports: [NewsCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private newsService = inject(NewsService);
  posts: IPost[] = [];

  ngOnInit(): void {
    this.getPosts();
  }


  private getPosts(): void {
    this.newsService.getAllPosts()
      .subscribe((posts: IPost[]) => {
        this.posts = posts
      });
  }


}
