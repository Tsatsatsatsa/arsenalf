import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommentInputComponent } from '../comment-input/comment-input.component';
import { CommentaryService } from '../../../../services/commentary.service';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-comment',
  imports: [FormsModule, MatInputModule, CommonModule, CommentInputComponent],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: any;
  @Input() id: any;
  @Output() commentAdded = new EventEmitter<any>();
  private reaction$ = new Subject<'like' | 'dislike'>();
  private commentaryService = inject(CommentaryService)


  ngOnInit(): void {
    console.log(this.comment)
    if (this.comment && !this.comment.reactions?.isDisliked && !this.comment.reactions?.isLiked) {
      this.comment.reactions.isPristine = true
    } else {
      this.comment.reactions.isPristine = false
    }

    this.reaction$
      .pipe(
        debounceTime(300),
      )
      .subscribe((action) => {
        this.executeReaction(action);
      });
  }

  showReplyForm = false;
  showReplies = false;
  replyText = '';

  handleAction(action) {
    this.reaction$.next(action)
  }



  executeReaction(action: 'like' | 'dislike') {
    if (action === 'like') {
      this.comment.reactions
      this.comment.reactions.isLiked = !this.comment.reactions.isLiked;
      if (this.comment.reactions.isLiked) {
        this.comment.reactions.like++
        if (this.comment.reactions.isDisliked) {
          this.comment.reactions.isDisliked = false;
          if (this.comment.reactions.dislike > 0) this.comment.reactions.dislike--
        }
      } else {
        if (this.comment.reactions.like > 0) this.comment.reactions.like--;
      }

    }

    if (action === 'dislike') {
      this.comment.reactions.isDisliked = !this.comment.reactions.isDisliked;
      if (this.comment.reactions.isDisliked) {
        this.comment.reactions.dislike++
        if (this.comment.reactions.isLiked) {
          this.comment.reactions.isLiked = false;
          if (this.comment.reactions.like > 0) this.comment.reactions.like--
        }
      } else {
        if (this.comment.reactions.dislike > 0) this.comment.reactions.dislike--;
      }

    }



    if (this.comment.reactions.isPristine) {
      if (this.comment.reactions.isLiked) {
        this.comment.reactions.isPristine = false;
        console.log('isLiked create', this.comment);
      } else if (this.comment.reactions.isDisliked) {
        this.comment.reactions.isPristine = false;
        console.log('isDisliked create', this.comment);
      }
      this.commentaryService.createReaction({ type: this.comment.reactions.isLiked ? 1 : this.comment.reactions.isDisliked ? 0 : null, commentaryId: this.comment.id })
      .subscribe(res => {
        console.log('create success' ,res)
      })
    } else {
      if (this.comment.reactions.isLiked) {
        console.log('isLiked update', this.comment);
      } else if (this.comment.reactions.isDisliked) {
        console.log('isDisliked update', this.comment);
      } else {
        console.log('delete', this.comment);
        this.comment.reactions.isPristine = true;
      }
      const body = { type: this.comment.reactions.isLiked ? 1 : this.comment.reactions.isDisliked ? 0 : null, commentaryId: this.comment.id }
      if (body.type === null) {
        this.commentaryService.deleteReaction(this.comment.id)
        .subscribe(res => {
          console.log('delete success' ,res)
        })
      } else {
        this.commentaryService.updateReaction(body,this.comment.id)
        .subscribe(res => {
          console.log('update success' ,res)
        })

      }
    }


  }

  toggleReplies() {
    this.showReplies = !this.showReplies;
  }



}