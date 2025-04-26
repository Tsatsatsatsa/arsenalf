import { Component, OnInit, inject } from '@angular/core';
import { NewsCardComponent } from '../news/news-card/news-card.component';
import { TagService } from './tag.service';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../models/post/post.interface';
import { ITag } from '../../models/tag.interface';

@Component({
  selector: 'app-tag',
  imports: [NewsCardComponent],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent implements OnInit {

  private tagService = inject(TagService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  posts: IPost[] = [];
  tag: ITag;

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const tagId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getPostsByTagId(tagId);
    this.getTagById(tagId);
  }

  private getPostsByTagId(tagId: number) {
    this.tagService.getPostByTagId(tagId)
      .subscribe((posts: IPost[]) => {
        this.posts = posts
      })
  }

  private getTagById(tagId: number) {
    this.tagService.getTagById(tagId)
      .subscribe((tag: ITag) => {
        this.tag = tag
      })
  }
}
