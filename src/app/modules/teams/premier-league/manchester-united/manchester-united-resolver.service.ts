import { Injectable } from '@angular/core';
import { ManchesterUnitedServiceService } from './manchester-united-service.service';
import { ActivatedRouteSnapshot, Resolve, ActivatedRoute } from '@angular/router';

@Injectable()
export class ManchesterUnitedResolverService  implements Resolve<any> {

  constructor(private manutdService: ManchesterUnitedServiceService,
  private route: ActivatedRoute) { }

  resolve(router: ActivatedRouteSnapshot) {
    return this.manutdService.getTeamInfo(router.params['name']);
  }

}
