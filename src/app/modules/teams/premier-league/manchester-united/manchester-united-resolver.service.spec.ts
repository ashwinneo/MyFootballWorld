import { TestBed, inject } from '@angular/core/testing';

import { ManchesterUnitedResolverService } from './manchester-united-resolver.service';

describe('ManchesterUnitedResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManchesterUnitedResolverService]
    });
  });

  it('should be created', inject([ManchesterUnitedResolverService], (service: ManchesterUnitedResolverService) => {
    expect(service).toBeTruthy();
  }));
});
