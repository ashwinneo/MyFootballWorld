import { TestBed, inject } from '@angular/core/testing';

import { TeamManagerInfoServiceService } from './team-manager-info-service.service';

describe('TeamManagerInfoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamManagerInfoServiceService]
    });
  });

  it('should be created', inject([TeamManagerInfoServiceService], (service: TeamManagerInfoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
