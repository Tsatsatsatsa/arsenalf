import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl: string = 'http://localhost:3000/';
  private http = inject(HttpClient);

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.apiUrl + 'posts');
  }

  getPostById(id: string): Observable<IPost> {
    return this.http.get<IPost>(this.apiUrl + `posts/${id}`)
  }

  createPost(post) {
    return this.http.post(this.apiUrl + 'posts', post);
  }


}
