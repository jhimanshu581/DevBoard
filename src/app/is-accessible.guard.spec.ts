import { TestBed } from '@angular/core/testing';

import { IsAccessibleGuard } from './is-accessible.guard';

describe('IsAccessibleGuard', () => {
  let guard: IsAccessibleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAccessibleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
