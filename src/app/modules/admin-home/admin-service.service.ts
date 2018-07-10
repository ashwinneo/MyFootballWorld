import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Admin } from './admin';
import { GetServiceService } from './../../core/common-service/get-service.service';
@Injectable()
export class AdminServiceService {

  constructor(private http: HttpClient,
  private getService: GetServiceService) { }
  queryParams: String;
  // getAdminDetails(): Observable<any> {
  //   return this.http.get<any>(this._url);
  // }
  getTeamList(): Observable<Admin> {
    return this.getService.proccessGetRequest('leagues', 'leagues', 'get');
  }
  getLeagueById(val): Observable<any> {
    this.queryParams = '?league=' + val;
    return this.getService.proccessGetRequest('leagues', 'league', 'get', this.queryParams);
  }
  getLeagueByName(val) {
    this.queryParams = '?name=' + val;
    return this.getService.proccessGetRequest('leagues','league', 'get', this.queryParams);
  }
  createLeague(val): Observable<any> {
    return this.getService.proccessGetRequest('leagues', 'addLeague', 'post', val);
  }
  updateLeague(val): Observable<any> {
    return this.getService.proccessGetRequest('leagues', 'editLeague', 'put', val);
  }
  deleteLeague(id): Observable<any> {
    this.queryParams = '?id=' + id;
    return this.getService.proccessGetRequest('leagues', 'deleteLeague', 'delete', this.queryParams);
  }
}
