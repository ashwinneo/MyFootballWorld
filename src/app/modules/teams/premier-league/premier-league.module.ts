import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManchesterUnitedComponent } from './manchester-united/manchester-united.component';

import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { ManchesterUnitedServiceService } from './manchester-united/manchester-united-service.service';
import { SharedModuleModule } from './../../../shared/shared-module.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ManchesterUnitedResolverService } from './manchester-united/manchester-united-resolver.service';
import { ChartModule } from 'angular-highcharts';
import { TeamSquadComponent } from './team-squad/team-squad.component';
@NgModule({
  imports: [
  CommonModule,
  SharedModuleModule,
  NgxSpinnerModule,
  NgxPaginationModule,
  Ng2OrderModule,
  ChartModule
  ],
  declarations: [
    ManchesterUnitedComponent,
    TeamSquadComponent
  ],
  providers: [
    ManchesterUnitedServiceService,
    ManchesterUnitedResolverService
  ],
  exports: [
    ManchesterUnitedComponent
  ]
})
export class PremierLeagueModule { }
