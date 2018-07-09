import { Injectable } from '@angular/core';
import { UtilityServiceService } from './utility-service.service';
import { ServiceCallService } from './../service-calls/service-call.service';

@Injectable()
export class GetServiceService {

  constructor(private uService: UtilityServiceService,
  private callService: ServiceCallService) { }

  public proccessGetRequest(modules, service,method, paramObj?: any) {
    if (method === 'get') {
    if (paramObj != undefined) {
      let url = this.uService.formUrl(modules, service) + paramObj;
      return this.callService.serviceCall(url, method);
    } else {
      let url = this.uService.formUrl(modules, service);
      return this.callService.serviceCall(url, method);
    }
  } else if (method === 'put') {
    let url = this.uService.formUrl(modules, service);    
    return this.callService.serviceCall(url, method, paramObj); 
  } else if (method === 'post') {
    let url = this.uService.formUrl(modules, service);    
    return this.callService.serviceCall(url, method, paramObj); 
  }
    
  }
}
