import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { NewsService } from '../news.service';
import { FormsModule } from '@angular/forms';
import { CommentaryService } from '../../../services/commentary.service';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../../shared/commentary/comment/comment.component';
import { CommentInputComponent } from '../../shared/commentary/comment-input/comment-input.component';
import { switchMap, tap } from 'rxjs';
import { IPost } from '../../../models/post/post.interface';
import { DateAgoPipe } from '../../pipe/date-ago.pipe';

@Component({
  selector: 'app-news-detail',
  imports: [MatInputModule, FormsModule, CommonModule, CommentComponent, CommentInputComponent, RouterModule,DateAgoPipe],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss'
})
export class NewsDetailComponent implements OnInit {


  private commentaryService = inject(CommentaryService);
  private newsService = inject(NewsService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  post: IPost;
  similarPosts:IPost[] = []
  commentaries


  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const postId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.loadPostAndComments(postId);

    this.setupCommentSubscription();
  }


  loadPostAndComments(postId: number) {
    if (!postId) return;

    this.newsService.getPostById(postId).pipe(
      tap((post: IPost) => this.post = post),
      switchMap((post: IPost) => {
        this.commentaryService.getCommentariesByPostId(post.id).subscribe(
          commentaries => this.commentaries = commentaries,
          error => console.error('Error loading commentaries:', error)
        );

        return this.newsService.getSimilarPostsByTag(post.tags.map(tag => tag.id),this.post.id);
      })
    ).subscribe(
      similarPosts => this.similarPosts = similarPosts,
      error => console.error('Error loading post or similar posts:', error)
    );
  }

  private setupCommentSubscription(): void {
    this.commentaryService.commentary$.pipe(
    ).subscribe(() => {
      if (this.post?.id) {
        this.commentaryService.getCommentariesByPostId(this.post.id)
          .subscribe(comments => {
            this.commentaries = comments;
          });
      }
    });
  }

}
