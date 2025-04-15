import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { NewsService } from '../news.service';
import { FormsModule } from '@angular/forms';
import { CommentaryService } from '../../../services/commentary.service';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../../shared/commentary/comment/comment.component';
import { CommentInputComponent } from '../../shared/commentary/comment-input/comment-input.component';
import { switchMap } from 'rxjs';
import { IPost } from '../../../models/post.interface';

@Component({
  selector: 'app-news-detail',
  imports: [MatInputModule, FormsModule, CommonModule, CommentComponent, CommentInputComponent],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss'
})
export class NewsDetailComponent implements OnInit {




  private commentaryService = inject(CommentaryService);
  private newsService = inject(NewsService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  public post: IPost;
  public commentaries


  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
    this.loadPostAndComments();
    this.setupCommentSubscription();
  }


  loadPostAndComments() {
    const postId = this.activatedRoute.snapshot.paramMap.get('id');
    if (postId) {
      this.newsService.getPostById(postId).pipe(
        switchMap((post: IPost) => {
          console.log(post)
          this.post = post
          return this.commentaryService.getCommentariesByPostId(this.post.id)
        })
      )
        .subscribe(commentaries => {
          console.log(commentaries)
          this.commentaries = commentaries
        })
    }
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
