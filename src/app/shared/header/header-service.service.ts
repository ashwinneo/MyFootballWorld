import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderServiceService {

  constructor(private http: HttpClient) { }

  getUserDetails(val): Observable<any> {
    let _url = 'http://localhost:3000/getLoginDetails?emailId=' + val;
    return this.http.get<any>(_url);
  }

  updateUserDetails(val): Observable<any> {
    let _url1 = 'http://localhost:3000/updateUserDetails';
    return this.http.put<any>(_url1, val);
  }
}
