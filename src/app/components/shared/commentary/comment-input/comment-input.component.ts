import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommentaryService } from '../../../../services/commentary.service';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../news/news.service';

@Component({
  selector: 'app-comment-input',
  imports: [MatInputModule, FormsModule],
  templateUrl: './comment-input.component.html',
  styleUrl: './comment-input.component.scss'
})
export class CommentInputComponent {

  private newsService = inject(NewsService);
  private commentaryService = inject(CommentaryService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  comment: string = '';
  @Input() currentComment: any;

  @Output() commentAdded: any = new EventEmitter();




  newComment() {
    this.commentaryService.createComment(
      this.comment,
      Number(this.activatedRoute.snapshot.paramMap.get('id')),
      this.currentComment?.id,
      this.currentComment?.user?.id)
      .subscribe(res => {
        this.clearComment()
      })

  }

  clearComment() {
    this.comment = ''
  }



}
