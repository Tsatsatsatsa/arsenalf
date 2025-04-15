import { Component, Input, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { IPost } from '../../../models/post.interface';

@Component({
  selector: 'app-news-card',
  imports: [RouterModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {

 
  @Input() post: IPost;



}
