import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl: string = 'http://localhost:3000/';
  private http = inject(HttpClient);
  private postSubject = new BehaviorSubject<any>(null);
  post$ = this.postSubject.asObservable();

  getAllPosts() {
    return this.http.get(this.apiUrl + 'posts');
  }

  getPostById(id: string) {
    return this.http.get(this.apiUrl + `posts/${id}`).pipe(
      tap((post) => this.postSubject.next(post))
    );
  }

  createPost(post) {
    return this.http.post(this.apiUrl + 'posts', post);
  }






}
