import { TestBed } from '@angular/core/testing';

import { PrimeService } from './prime.service';

describe('PrimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimeService = TestBed.get(PrimeService);
    expect(service).toBeTruthy();
  });
});
