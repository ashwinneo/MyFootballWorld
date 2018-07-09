import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServiceCallService {

  constructor(private http: HttpClient) { }

  serviceCall(url, method, paramObj?): Observable<any> {
    if (method == 'get') {
      return this.http[method](url);
    } else {
      return this.http[method](url, paramObj);
    }
  }
}
