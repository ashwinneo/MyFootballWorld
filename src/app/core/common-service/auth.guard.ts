import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginServiceService } from './../../modules/login/login-service.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private lservice: LoginServiceService,
  private route: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.lservice.isLoggedIn) {
        this.route.navigate(['']);
      }
    return this.lservice.isLoggedIn;
  }
}
