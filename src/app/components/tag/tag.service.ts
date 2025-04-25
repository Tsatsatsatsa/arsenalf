import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { ITag } from "../../models/tag.interface";
import { IPost } from "../../models/post/post.interface";



@Injectable({
    providedIn: 'root'
})
export class TagService {

    private readonly apiUrl: string = 'http://localhost:3000/';
    private http: HttpClient = inject(HttpClient);


    searchTags(searchName: string): Observable<ITag[]> {
        return this.http.get<ITag[]>(this.apiUrl + `tag?searchName=${searchName}`)
    }

    getPostByTagId(tagId: number): Observable<IPost[]> {
        return this.http.get<IPost[]>(this.apiUrl + `posts/tag/${tagId}`)
    }

    getTagById(tagId: number): Observable<ITag> {
        return this.http.get<ITag>(this.apiUrl + `tag/${tagId}`)
    }

}