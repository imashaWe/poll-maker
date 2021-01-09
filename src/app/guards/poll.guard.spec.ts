import { TestBed } from '@angular/core/testing';

import { PollGuard } from './poll.guard';

describe('PollGuard', () => {
  let guard: PollGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PollGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
