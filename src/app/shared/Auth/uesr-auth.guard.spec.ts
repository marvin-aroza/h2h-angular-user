import { TestBed } from '@angular/core/testing';

import { UesrAuthGuard } from './uesr-auth.guard';

describe('UesrAuthGuard', () => {
  let guard: UesrAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UesrAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
