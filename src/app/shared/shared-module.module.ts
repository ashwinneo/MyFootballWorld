import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';

import { SignUpServiceService } from './sign-up/sign-up-service.service';
@NgModule({
  imports: [
  CommonModule,
  FormsModule
  ],
  declarations: [
    PageNotFoundComponent,
    HeaderComponent,
    SignUpComponent
  ],
  providers: [
    SignUpServiceService
  ],
  exports: [
    PageNotFoundComponent,
    HeaderComponent,
    SignUpComponent
  ]
})
export class SharedModuleModule { }
