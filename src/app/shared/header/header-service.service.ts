import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GetServiceService } from './../../core/common-service/get-service.service';

@Injectable()
export class HeaderServiceService {

  constructor(private http: HttpClient,
  private getService: GetServiceService) { }
  queryParams: String;
  getUserDetails(val): Observable<any> {
    this.queryParams = '?emailId=' + val;
    return this.getService.proccessGetRequest('login', 'login', 'get', this.queryParams);

  }

  updateUserDetails(val): Observable<any> {
    return this.getService.proccessGetRequest('login', 'updatePassword', 'put', val);
  }
}
