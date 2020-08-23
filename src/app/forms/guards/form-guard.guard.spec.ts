import { TestBed, async, inject } from '@angular/core/testing';

import { FormGuardGuard } from './form-guard.guard';

describe('FormGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormGuardGuard]
    });
  });

  it('should ...', inject([FormGuardGuard], (guard: FormGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
