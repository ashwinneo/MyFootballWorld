import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginServiceService {

  loggedInStatus = false;
  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    window.localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }
  getUserDetails(userName): Observable<any> {
    let _url: string = 'http://localhost:3000/getLoginDetails?userId=' + userName;
    return this.http.get<any>(_url);
  }

  getUserDetailsByEmailId(val): Observable<any> {
    let _url1: string = 'http://localhost:3000/getLoginDetails?emailId=' + val;
    return this.http.get<any>(_url1);
  }

  updatePassword(obj): Observable<any> {
    let _url2: string = "http://localhost:3000/updatePassword";
    return this.http.put<any>(_url2,obj);
  }

}
