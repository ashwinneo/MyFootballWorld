import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SignUpServiceService {

  private _url: string = 'http://localhost:3000/signUp';
  constructor(private http: HttpClient) { }

  registerAccount(registerObj): Observable<any> {
    return this.http.post<any>(this._url, registerObj);
  }

}
