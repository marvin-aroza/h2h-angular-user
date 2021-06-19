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
export class DonateService {

  constructor(
    private http: HttpClient
  ) { }

  //Generic function to get donate list by category
  getDonateList(catId:any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.get<any>(`${environment.apiUrl}/donate/${catId}`, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }

  addDonate(formData:any) {
    console.log(formData);
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.post<any>(`${environment.apiUrl}/donate`, formData, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }

  getDonatebyId(donateId:any) {
    console.log(donateId);
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.get<any>(`${environment.apiUrl}/donate/detail/${donateId}`, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }

  addDonateRequest(formData:any) {
    console.log(formData);
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.post<any>(`${environment.apiUrl}/donate/donate-request`, formData, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }

  //get the total count
  getDonationDetailscount() {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http.get<any>(`${environment.apiUrl}/donate/donation/count`, {
      headers: headers
    })
    .pipe(map((result: any) => {
      return result;
    }));
  }
}
