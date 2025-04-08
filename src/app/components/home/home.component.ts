import { Component, inject } from '@angular/core';
import { NewsCardComponent } from '../news/news-card/news-card.component';
import { PostService } from '../../services/post.service';
import { IPost } from '../../../data/mock-data.service';

@Component({
  selector: 'app-home',
  imports: [NewsCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private posetService = inject(PostService);
  public posts: IPost[] = [];

  ngOnInit(): void {
    this.posetService.getAllPosts().subscribe((posts: IPost[]) => this.posts = posts);
  }


}
