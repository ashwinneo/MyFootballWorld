import { TestBed, inject } from '@angular/core/testing';

import { ManchesterUnitedServiceService } from './manchester-united-service.service';

describe('ManchesterUnitedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManchesterUnitedServiceService]
    });
  });

  it('should be created', inject([ManchesterUnitedServiceService], (service: ManchesterUnitedServiceService) => {
    expect(service).toBeTruthy();
  }));
});
