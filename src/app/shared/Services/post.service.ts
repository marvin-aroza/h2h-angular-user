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
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  //Generic function to get post list by category
  getPostList(limit:any=null) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.get<any>(`${environment.apiUrl}/post/user-list-all-approved`, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }

  getPostUserList() {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.get<any>(`${environment.apiUrl}/post/user-posts`, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }

  getPostListByCatId(catId:any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.get<any>(`${environment.apiUrl}/post/list/${catId}`, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }

  //get post by id
  getPostById(postId:any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.get<any>(`${environment.apiUrl}/post/${postId}`, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }

  //Delete post by id
  deletePost() {

  }

  //Update Post
  updatePost(formData:any, postId:any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    console.log({formData});
    return this.http.patch<any>(`${environment.apiUrl}/post/${postId}`,formData,{
      headers:headers
    }).pipe(map((result:any)=>{
      return result;
    }))
  }



   //AddPost
   addPost(formdata:any){
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    console.log({formdata});
    return this.http.post<any>(`${environment.apiUrl}/post`,formdata,{
      headers:headers
    }).pipe(map((result:any)=>{
      return result;
    }))
  }

  //Add Comment
  addComment(formdata:any){
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    console.log({formdata});
    return this.http.post<any>(`${environment.apiUrl}/comment`,formdata,{
      headers:headers
    }).pipe(map((result:any)=>{
      return result;
    }))
  }

  //Get Comment
  getComment(postId:any){
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.get<any>(`${environment.apiUrl}/comment/list/${postId}`,{
      headers:headers
    }).pipe(map((result:any)=>{
      return result;
    }))
  }
}
