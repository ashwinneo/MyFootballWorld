import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GetServiceService } from './../../core/common-service/get-service.service';


@Injectable()
export class LoginServiceService {

  
  constructor(private http: HttpClient,
  private getService: GetServiceService) { }
  queryParams: String;
  
  getUserDetails(userName): Observable<any> {
    let _url: string = 'http://localhost:3000/getLoginDetails?userId=' + userName;
    return this.http.get<any>(_url);
  }

  getUserDetailsByEmailId(val): Observable<any> {
    this.queryParams = '?emailId=' + val;
    return this.getService.proccessGetRequest('login', 'login','get', this.queryParams);
  }

  updatePassword(obj): Observable<any> {    
    return this.getService.proccessGetRequest('login','updatePassword','put', obj);
  }

}
