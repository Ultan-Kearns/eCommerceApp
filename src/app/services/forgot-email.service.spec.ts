import { TestBed } from '@angular/core/testing';

import { ForgotEmailService } from './forgot-email.service';

describe('ForgotEmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForgotEmailService = TestBed.get(ForgotEmailService);
    expect(service).toBeTruthy();
  });
});
