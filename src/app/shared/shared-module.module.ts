import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SignUpServiceService } from './sign-up/sign-up-service.service';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { HeaderServiceService } from './header/header-service.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamManagerComponent } from './team-manager/team-manager.component';
@NgModule({
  imports: [    
  CommonModule,
  FormsModule,
  NgxSpinnerModule
  ],
  declarations: [
    PageNotFoundComponent,
    HeaderComponent,
    SignUpComponent,
    TeamStatsComponent,
    AboutUsComponent,
    TeamManagerComponent
  ],
  providers: [
    SignUpServiceService,
    HeaderServiceService
  ],
  exports: [
    PageNotFoundComponent,
    HeaderComponent,
    SignUpComponent,
    TeamStatsComponent,
    TeamManagerComponent
  ]
})
export class SharedModuleModule { }
