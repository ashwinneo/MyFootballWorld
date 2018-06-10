import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TooltipModule} from 'ngx-tooltip';
import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { ModuleModule } from './modules/module.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModuleModule } from './core/common-module.module';
import { SharedModuleModule } from './shared/shared-module.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { TeamModuleModule } from './modules/teams/team-module.module';
import { PremierLeagueModule } from './modules/teams/premier-league/premier-league.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    ModuleModule,
    FormsModule,
    HttpClientModule,
    CommonModuleModule,
    SharedModuleModule,
    AngularFontAwesomeModule,
    NgxSpinnerModule,
    TooltipModule,
    Ng2OrderModule,
    NgxPaginationModule,
    PremierLeagueModule,
    TeamModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
