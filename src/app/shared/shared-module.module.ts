import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SignUpServiceService } from './sign-up/sign-up-service.service';
import { HeaderServiceService } from './header/header-service.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { ModalUpdatePasswordComponent } from './header/modal-update-password/modal-update-password.component';
import { ModalUpdateProfileComponent } from './header/modal-update-profile/modal-update-profile.component';

import { ModalSuccessComponent } from './modal/modal-success/modal-success.component';
import { ModalFailureComponent } from './modal/modal-failure/modal-failure.component';
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
    AboutUsComponent,
    ModalUpdatePasswordComponent,
    ModalUpdateProfileComponent,
    ModalSuccessComponent,
    ModalFailureComponent
  ],
  providers: [
    SignUpServiceService,
    HeaderServiceService
  ],
  exports: [
    PageNotFoundComponent,
    HeaderComponent,
    SignUpComponent,
    ModalFailureComponent
  ]
})
export class SharedModuleModule { }
