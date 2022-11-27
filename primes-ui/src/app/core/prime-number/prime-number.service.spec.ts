import { TestBed } from '@angular/core/testing';

import { PrimeNumberService } from './prime-number.service';

describe('PrimeNumberService', () => {
  let service: PrimeNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
