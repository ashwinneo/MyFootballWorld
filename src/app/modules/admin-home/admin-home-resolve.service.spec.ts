import { TestBed, inject } from '@angular/core/testing';

import { AdminHomeResolveService } from './admin-home-resolve.service';

describe('AdminHomeResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminHomeResolveService]
    });
  });

  it('should be created', inject([AdminHomeResolveService], (service: AdminHomeResolveService) => {
    expect(service).toBeTruthy();
  }));
});
