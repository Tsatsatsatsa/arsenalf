import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";



@Injectable({
    providedIn: 'root'
})
export class TagService {

    private readonly apiUrl: string = 'http://localhost:3000/';
    private http: HttpClient = inject(HttpClient);


    getTags(searchName: string) {
        return this.http.get(this.apiUrl + `tag?searchName=${searchName}`)
    }

}