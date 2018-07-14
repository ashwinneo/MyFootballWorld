import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CommonServiceService } from './common-service.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private cService: CommonServiceService,
  private route: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.cService.isLoggedIn) {
        this.route.navigate(['']);
      }
    return this.cService.isLoggedIn;
  }
}
