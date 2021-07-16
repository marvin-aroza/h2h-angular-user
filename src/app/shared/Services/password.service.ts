import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';

import { environment } from 'src/environments/environment'

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private httpclient:HttpClient) { }

  resetPasswordLink(formdata:any,status:string){
    let headers = this.getheaders();
    console.log({formdata});
    return this.httpclient.post<any>(`${environment.apiUrl}/password/reset-password-link?type=${status}`,formdata,{
      headers:headers
    }).pipe(map((result:any)=>{

      return result;
    }))
  }

  resetPassword(formdata:any){
    let headers = this.getheaders();
    console.log({formdata});
    return this.httpclient.post<any>(`${environment.apiUrl}/password/reset-password`,formdata,{
      headers:headers
    }).pipe(map((result:any)=>{

      return result;
    }))
  }

  getheaders(){
    let headers = new HttpHeaders();
    headers.append('content-Type','application/json');
    headers.append('Accept','application/json');
    return headers;
  }
}
