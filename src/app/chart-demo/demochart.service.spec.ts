import { TestBed, inject } from '@angular/core/testing';

import { DemochartService } from './demochart.service';

describe('DemochartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemochartService]
    });
  });

  it('should be created', inject([DemochartService], (service: DemochartService) => {
    expect(service).toBeTruthy();
  }));
});
