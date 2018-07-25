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
import { TeamHeaderComponent } from './team-header/team-header.component';
import { TeamStatsAdComponent } from './team-stats-ad/team-stats-ad.component';
import { TeamStatsTdComponent } from './team-stats-td/team-stats-td.component';

import { TeamManagerComponent } from './team-manager/team-manager.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { TeamManagerInfoComponent } from './team-manager/team-manager-info/team-manager-info.component';
import { TeamManagerInfoResolverServiceService } from './team-manager/team-manager-info/team-manager-info-resolver-service.service';
import { TeamManagerInfoServiceService } from './team-manager/team-manager-info/team-manager-info-service.service';
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
    TeamSquadComponent,
    TeamHeaderComponent,
    TeamStatsAdComponent,
    TeamStatsTdComponent,
    TeamManagerComponent,
    TeamStatsComponent,
    TeamManagerInfoComponent
  ],
  providers: [
    ManchesterUnitedServiceService,
    ManchesterUnitedResolverService,
    TeamManagerInfoResolverServiceService,
    TeamManagerInfoServiceService
  ],
  exports: [
    ManchesterUnitedComponent,
    TeamHeaderComponent
  ]
})
export class PremierLeagueModule { }
