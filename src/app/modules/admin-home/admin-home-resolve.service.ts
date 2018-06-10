import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AdminServiceService } from './admin-service.service';
import { Admin } from './admin';
@Injectable()
export class AdminHomeResolveService implements Resolve<Admin> {

  constructor(private adminService: AdminServiceService) { }

  resolve(router: ActivatedRouteSnapshot) {
    return this.adminService.getTeamList();
  }
}
