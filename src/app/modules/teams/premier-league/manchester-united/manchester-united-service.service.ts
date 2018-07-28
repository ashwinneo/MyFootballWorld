import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GetServiceService } from './../../../../core/common-service/get-service.service';

@Injectable()
export class ManchesterUnitedServiceService {

  _url: string = 'assets/data/manchesterUnited.json';
  queryParams: String;
  constructor(private http: HttpClient,
  private getService: GetServiceService) { }


  getTeamDetails(val): Observable<any> {
    this.queryParams = '?teamName=' + val;
    return this.getService.proccessGetRequest('team', 'squadList','get', this.queryParams);
  }

  getTeamInfo(name): Observable<any> {
    this.queryParams = '?name=' + name;
    return this.getService.proccessGetRequest('team', 'teamInfo', 'get', this.queryParams);
  }

  updateTeamInfo(val) {
    return this.getService.proccessGetRequest('team','updateTeam', 'put',val);
  }

  updateTeamName(obj) {
    return this.getService.proccessGetRequest('leagues','updateteamName','put',obj);
  }
}
