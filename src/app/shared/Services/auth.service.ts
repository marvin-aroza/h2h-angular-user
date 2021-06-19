import { Injectable } from '@angular/core';

//Required modules
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http'

//Environment
import { environment} from 'src/environments/environment'

//rxjs library functions
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  //Login function
  login(formData:any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.post<any>(`${environment.apiUrl}/login`, formData, {
      headers: headers
    })
    .pipe(map((result: any) => {
        this.setUserDetails(result.data);
        console.log(result);
        return result;
    }));
  }

  //Registration function
  registration(formData:any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.post<any>(`${environment.apiUrl}/auth/register`, formData, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }

  //Get LocalStorage user details function
  getUserDetails() {
    //Gets the details of the current logged in user from localStorage
    let userDetails = JSON.parse(localStorage.getItem('userDetails')  || '{}')
    return userDetails;
  }

  //set the logged in user details to localstorage
  setUserDetails(userDetails:any) {
    localStorage.setItem('userDetails', JSON.stringify(userDetails))
  }
}
