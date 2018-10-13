import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './common-service/auth.guard';
import { GetServiceService } from './common-service/get-service.service';
import { UtilityServiceService } from './common-service/utility-service.service';
import { ServiceCallService } from './service-calls/service-call.service';
import { CommonServiceService } from './common-service/common-service.service';

import { ExportServiceService } from './common-service/export-service.service';

@NgModule({
  imports: [      
  CommonModule
  ],
  providers: [
    AuthGuard,
    GetServiceService,
    UtilityServiceService,
    ServiceCallService,
    CommonServiceService,
    ExportServiceService
  ],
  declarations: []
})
export class CommonModuleModule { }
