import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrimeNumberService {
  constructor(private httpClient: HttpClient) {}

  getPrimeNumbers(upperBound: number): Observable<number[]> {
    return this.httpClient.get<number[]>('/api/PrimeNumber/getPrimeNumbers', {
      params: { upperBound },
    });
  }
}
