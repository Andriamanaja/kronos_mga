import { TestBed } from '@angular/core/testing';

import { DetailsClientService } from './details-client.service';

describe('DetailsClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsClientService = TestBed.get(DetailsClientService);
    expect(service).toBeTruthy();
  });
});
