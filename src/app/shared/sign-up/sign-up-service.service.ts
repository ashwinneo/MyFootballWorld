import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GetServiceService } from './../../core/common-service/get-service.service';
@Injectable()
export class SignUpServiceService {

  private _url: string = 'http://localhost:3000/signUp';
  constructor(private http: HttpClient,
  private getService: GetServiceService) { }

  registerAccount(registerObj): Observable<any> {
    return this.getService.proccessGetRequest('login','signUp', 'post', registerObj);
    
  }

}
