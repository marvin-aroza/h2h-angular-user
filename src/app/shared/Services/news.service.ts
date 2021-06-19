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
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  //Generic function to get post list by category
  getNewsList() {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.get<any>(`${environment.apiUrl}/news`, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }

  getNewsById(newsId:any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.get<any>(`${environment.apiUrl}/news/${newsId}`, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }

}
