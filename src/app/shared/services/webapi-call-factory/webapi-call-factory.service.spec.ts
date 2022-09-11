import { TestBed } from '@angular/core/testing';

import { WebapiCallFactoryService } from './webapi-call-factory.service';

describe('WebapiCallFactoryService', () => {
  let service: WebapiCallFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebapiCallFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
