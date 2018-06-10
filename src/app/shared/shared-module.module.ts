import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
  CommonModule,
  FormsModule
  ],
  declarations: [
    PageNotFoundComponent,
    HeaderComponent
  ],
  exports: [
    PageNotFoundComponent,
    HeaderComponent
  ]
})
export class SharedModuleModule { }
