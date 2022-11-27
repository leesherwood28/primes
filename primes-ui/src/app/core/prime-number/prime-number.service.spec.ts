import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PrimeNumberService } from './prime-number.service';

describe('PrimeNumberService', () => {
  let service: PrimeNumberService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
    });
    service = TestBed.inject(PrimeNumberService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the correct api', () => {
    const testPrimes = [2, 3, 5, 7];

    service
      .getPrimeNumbers(10)
      .subscribe((primes) => expect(primes).toEqual(testPrimes));

    const request = httpTestingController.expectOne(
      '/api/PrimeNumber/getPrimeNumbers?upperBound=10'
    );
    expect(request.request.method).toEqual('GET');
    request.flush(testPrimes);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
