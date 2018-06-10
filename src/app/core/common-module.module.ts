import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './common-service/auth.guard';

@NgModule({
  imports: [
  CommonModule
  ],
  providers: [
    AuthGuard
  ],
  declarations: []
})
export class CommonModuleModule { }
