import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginServiceService } from './login/login-service.service';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CommonModuleModule } from '../core/common-module.module';
import { AdminServiceService } from './admin-home/admin-service.service';
import {TooltipModule} from 'ngx-tooltip';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { TeamModuleModule } from '../modules/teams/team-module.module';
import { PremierLeagueModule } from './teams/premier-league/premier-league.module';
import { SharedModuleModule } from './../shared/shared-module.module';
import { Admin } from './admin-home/admin';
import { AdminHomeResolveService } from './admin-home/admin-home-resolve.service';
import { ModalAddLeagueComponent } from './admin-home/modals/modal-add-league/modal-add-league.component';
import { ModalEditLeagueComponent } from './admin-home/modals/modal-edit-league/modal-edit-league.component';
import { ModalDeleteLeagueComponent } from './admin-home/modals/modal-delete-league/modal-delete-league.component';
@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    CommonModuleModule,
    NgxSpinnerModule,
    TooltipModule,
    Ng2OrderModule,
    NgxPaginationModule,
    TeamModuleModule,
    PremierLeagueModule,
    SharedModuleModule
  ],
  declarations: [
    LoginComponent,
    AdminHomeComponent,
    ModalAddLeagueComponent,
    ModalEditLeagueComponent,
    ModalDeleteLeagueComponent
  ],
  providers: [
    LoginServiceService,
    AdminServiceService,
    AdminHomeResolveService,
    Admin
  ],
  exports: [
    LoginComponent
  ]
})
export class ModuleModule { }
