import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ManchesterUnitedServiceService {

  _url: string = 'assets/data/manchesterUnited.json';
  constructor(private http: HttpClient) { }


  getTeamDetails(): Observable<any> {
    return this.http.get<any>(this._url);
  }

  getTeamInfo(name): Observable<any> {
    let _url1 = 'http://localhost:3000/teamInfo?name=' + name;
    return this.http.get<any>(_url1);
  }
}
