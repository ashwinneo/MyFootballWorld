import { Injectable } from '@angular/core';
import { GetServiceService } from './get-service.service';
import { environment } from './../../../environments/environment';
@Injectable()
export class UtilityServiceService {
  constructor() { }

  public formUrl(modules, service) {
    let url = environment.localBaseUrl +  environment.service[modules][service];
    return url;
  }
}
