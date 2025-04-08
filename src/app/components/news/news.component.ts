import { Component, OnInit, inject } from '@angular/core';
import { IPost} from '../../../data/mock-data.service';
import { NewsCardComponent } from './news-card/news-card.component';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-news',
  imports: [NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {

  private posetService = inject(PostService);
  public posts: IPost[] = [];

  ngOnInit(): void {
    this.posetService.getAllPosts()
      .subscribe({
        next: (posts: IPost[]) => this.posts = posts,
        error: (error) => console.log(error)
      }
      )
  }

}
