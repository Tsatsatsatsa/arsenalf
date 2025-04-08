import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommentaryService } from '../../../../services/commentary.service';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../../services/post.service';

@Component({
  selector: 'app-comment-input',
  imports: [MatInputModule, FormsModule],
  templateUrl: './comment-input.component.html',
  styleUrl: './comment-input.component.scss'
})
export class CommentInputComponent {

  private postService = inject(PostService);
  private commentaryService = inject(CommentaryService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  comment: string = '';
  @Input() id: number = null;

  @Output() commentAdded:any = new EventEmitter();

  

  
   newComment() {
    this.commentaryService.createComment(this.comment, Number(this.activatedRoute.snapshot.paramMap.get('id')), this.id)
      .subscribe(res => {
        console.log(res)
       this.clearComment()
      })

  }

 clearComment() {
    this.comment = ''
  }



}
