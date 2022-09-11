import { TestBed } from '@angular/core/testing';

import { DeliveryAnalysisService } from './delivery-analysis.service';

describe('DeliveryAnalysisService', () => {
  let service: DeliveryAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
