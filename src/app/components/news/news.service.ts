import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { IPost } from '../../models/post/post.interface';
import { CreatePost } from '../../models/post/create-post.interface';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private readonly apiUrl: string = environment.apiUrl;
  private http = inject(HttpClient);

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.apiUrl + 'posts');
  }

  getPostById(id: number): Observable<IPost> {
    return this.http.get<IPost>(this.apiUrl + `posts/${id}`)
  }

  createPost(post: CreatePost): Observable<IPost> {
    return this.http.post<IPost>(this.apiUrl + 'posts', post);
  }

  getSimilarPostsByTag(tagIds: number[], postId: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.apiUrl + `posts/similar?tagIds=${tagIds}&postId=${postId}`)
  }

}
