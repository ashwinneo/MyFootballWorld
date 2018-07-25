import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TeamManagerInfoServiceService } from './team-manager-info-service.service';
import { CommonServiceService } from './../../../../../core/common-service/common-service.service';

@Injectable()
export class TeamManagerInfoResolverServiceService {

  constructor(private managerInfoSer: TeamManagerInfoServiceService,
  private cs: CommonServiceService) { }

  resolve(router: ActivatedRouteSnapshot) {
    let managerName = this.cs.getManagerName();
    return this.managerInfoSer.getManagerInfo(managerName);
  }

}
