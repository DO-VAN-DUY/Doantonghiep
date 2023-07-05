import { TestBed } from '@angular/core/testing';

import { HomesGuard } from './homes.guard';

describe('HomesGuard', () => {
  let guard: HomesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
