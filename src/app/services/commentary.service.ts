import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaryService {

  private apiUrl: string = 'http://localhost:3000/';
  private http = inject(HttpClient);
  private commentarySubject = new BehaviorSubject<any>(null);
  commentary$ = this.commentarySubject.asObservable();


  createComment(commentary:string, postId: number, parentCommentaryId: number | null, parentCommentaryUserId: number | null) {
    return this.http.post(this.apiUrl + 'commentary', { commentary, postId, parentCommentaryId, parentCommentaryUserId }).pipe(
      tap((commentary) => this.commentarySubject.next(commentary))
    );
  }

  getCommentariesByPostId(id) {
    return this.http.get(this.apiUrl + `commentary/${id}`);
  }






  createReaction(reaction) {
    return this.http.post(this.apiUrl + 'reaction', reaction);
  }

  updateReaction(reaction, commentaryId) {
    return this.http.put(this.apiUrl + `reaction/${commentaryId}`, reaction);
  }

  deleteReaction(reactionId) {
    return this.http.delete(this.apiUrl + `reaction/${reactionId}`);
  }
}
