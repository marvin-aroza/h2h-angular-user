import { Injectable } from '@angular/core';

//necessary modules
import { HttpClient, HttpHeaders} from '@angular/common/http'

//Environment
import { environment} from 'src/environments/environment'

//rxjs library functions
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  //Generic function to get forum comment list
  getForumCommentList(forumId:any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.get<any>(`${environment.apiUrl}/forumComment/${forumId}`, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }

  addForumComment(formData:any) {
    console.log(formData);
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.post<any>(`${environment.apiUrl}/forumComment`, formData, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }

  getForumbyId(forumId:any) {
    console.log(forumId);
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.get<any>(`${environment.apiUrl}/forum/detail/${forumId}`, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }
}
