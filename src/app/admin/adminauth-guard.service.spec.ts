import { TestBed } from '@angular/core/testing';

import { AdminauthGuardService } from './adminauth-guard.service';

describe('AdminauthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminauthGuardService = TestBed.get(AdminauthGuardService);
    expect(service).toBeTruthy();
  });
});
