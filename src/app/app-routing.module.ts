import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleModule } from './modules/module.module';
import { LoginComponent } from './modules/login/login.component';
import { AdminHomeComponent } from './modules/admin-home/admin-home.component';
import { AuthGuard } from './core/common-service/auth.guard';
import { SharedModuleModule } from './shared/shared-module.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

import { AdminHomeResolveService } from './modules/admin-home/admin-home-resolve.service';
import { PremierLeagueModule } from './modules/teams/premier-league/premier-league.module';
import { ManchesterUnitedComponent } from './modules/teams/premier-league/manchester-united/manchester-united.component';

import { ManchesterUnitedResolverService } from './modules/teams/premier-league/manchester-united/manchester-united-resolver.service';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'adminHome/:id', component: AdminHomeComponent, 
  // canActivate: [AuthGuard],
   resolve: {
    admin: AdminHomeResolveService
   }
  },
  { path: 'teamInfo/:name', component: ManchesterUnitedComponent,
  resolve: {
    teamInfo: ManchesterUnitedResolverService
  }
},
  { path: 'signUp', component: SignUpComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule, ModuleModule, SharedModuleModule, PremierLeagueModule]
})
export class AppRoutingModule { }
