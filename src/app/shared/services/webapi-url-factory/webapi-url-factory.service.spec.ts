import { TestBed } from '@angular/core/testing';

import { WebapiUrlFactoryService } from './webapi-url-factory.service';

describe('WebapiUrlFactoryService', () => {
  let service: WebapiUrlFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebapiUrlFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
