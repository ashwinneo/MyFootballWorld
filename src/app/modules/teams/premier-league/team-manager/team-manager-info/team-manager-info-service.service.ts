import { Injectable } from '@angular/core';
import { GetServiceService } from './../../../../../core/common-service/get-service.service';

@Injectable()
export class TeamManagerInfoServiceService {

  constructor(private gService: GetServiceService) { }
  append: String;
  getManagerInfo(val) {
    this.append = "?name=" + val;
    return this.gService.proccessGetRequest('team','managerInfo','get',this.append);
  }
}
