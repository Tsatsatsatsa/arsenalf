import { Component, OnInit, inject } from '@angular/core';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsService } from './news.service';
import { IPost } from '../../models/post.interface';

@Component({
  selector: 'app-news',
  imports: [NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {

  private newsService = inject(NewsService);
  public posts: IPost[] = [];

  ngOnInit(): void {
    this.newsService.getAllPosts()
      .subscribe({
        next: (posts: IPost[]) => this.posts = posts,
        error: (error) => console.log(error.error)
      }
      )
  }


}
