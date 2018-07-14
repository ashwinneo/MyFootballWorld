import { Injectable } from '@angular/core';
import { ManchesterUnitedServiceService } from './manchester-united-service.service';
import { ActivatedRouteSnapshot, Resolve, ActivatedRoute } from '@angular/router';
import { CommonServiceService } from './../../../../core/common-service/common-service.service';

@Injectable()
export class ManchesterUnitedResolverService  implements Resolve<any> {

  constructor(private manutdService: ManchesterUnitedServiceService,
  private route: ActivatedRoute,
  private commonService: CommonServiceService) { }

  resolve(router: ActivatedRouteSnapshot) {
    let teamName = this.commonService.getTeamName();
    // return this.manutdService.getTeamInfo(router.params['teamName']);
    return this.manutdService.getTeamInfo(teamName);
  }

}
