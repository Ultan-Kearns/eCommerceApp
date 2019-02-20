import { TestBed } from '@angular/core/testing';

import { BugpostService } from './bugpost.service';

describe('BugpostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BugpostService = TestBed.get(BugpostService);
    expect(service).toBeTruthy();
  });
});
