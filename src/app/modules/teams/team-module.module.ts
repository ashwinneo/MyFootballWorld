import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremierLeagueModule } from './premier-league/premier-league.module';
import { SharedModuleModule } from './../../shared/shared-module.module';
@NgModule({
  imports: [
  
    CommonModule,
    PremierLeagueModule,
    SharedModuleModule
  ],
  declarations: []
})
export class TeamModuleModule { }
