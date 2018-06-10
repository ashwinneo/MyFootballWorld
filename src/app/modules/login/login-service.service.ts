import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginServiceService {

  loggedInStatus = false;
  constructor(private http: HttpClient) { }
  _url: string = 'assets/data/login.json';

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    window.localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }
  getUserDetails(): Observable<any> {
    return this.http.get(this._url);
  }

}
