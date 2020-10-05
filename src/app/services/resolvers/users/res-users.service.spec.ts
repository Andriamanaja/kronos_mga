import { TestBed } from '@angular/core/testing';

import { ResUsersService } from './res-users.service';

describe('ResUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResUsersService = TestBed.get(ResUsersService);
    expect(service).toBeTruthy();
  });
});
