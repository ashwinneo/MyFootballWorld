import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Admin } from './admin';
@Injectable()
export class AdminServiceService {

  constructor(private http: HttpClient) { }
  // _url: string = 'assets/data/adminHome.json';
  _url: string = 'assets/data/adminHome.json';
  _url1: string = 'http://localhost:3000/leagues';
  _url3: string = 'http://localhost:3000/topics';
  // _url2: string = 'http://localhost:3000/league';
  getAdminDetails(): Observable<any> {
    return this.http.get<any>(this._url);
  }
  getTeamList(): Observable<Admin> {
    return this.http.get<Admin>(this._url1);
  }
  getLeagueById(val): Observable<any> {
    let _url2 = 'http://localhost:3000/league?league=' + val;
    return this.http.get<any>(_url2);
  }
  getLeagueByName(val) {
    let _url6 = 'http://localhost:3000/league?name=' + val;
    return this.http.get<any>(_url6);
  }
  createLeague(val): Observable<any> {
    return this.http.post<any>(this._url3, val);
  }
  updateLeague(val): Observable<any> {
    let _url4 = 'http://localhost:3000/editLeague';
    return this.http.put<any>(_url4 , val);
  }
  deleteLeague(id): Observable<any> {
    let _url5 = 'http://localhost:3000/deleteLeague?id=' + id;
    return this.http.delete<any>(_url5);
  }
}
