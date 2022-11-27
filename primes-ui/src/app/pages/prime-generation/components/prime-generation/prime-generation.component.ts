import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  combineLatest,
  debounce,
  debounceTime,
  map,
  Observable,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { PrimeNumberService } from 'src/app/core/prime-number/prime-number.service';
import { Validators } from '@angular/forms';

type PrimeNumberViewState = {
  valid: boolean;
  primes?: number[];
};

@Component({
  selector: 'app-prime-generation',
  templateUrl: './prime-generation.component.html',
  styleUrls: ['./prime-generation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimeGenerationComponent implements OnInit {
  readonly upperBoundControl = new FormControl(null, [
    Validators.required,
    Validators.min(0),
    Validators.max(100),
  ]);
  readonly primeViewState$ = this.selectPrimesViewState();

  constructor(private primeNumberService: PrimeNumberService) {}

  ngOnInit(): void {}

  private selectPrimesViewState(): Observable<PrimeNumberViewState> {
    return this.upperBoundControl.valueChanges.pipe(
      startWith(this.upperBoundControl.value),
      map((value) => ({
        upperBound: value,
        valid: this.upperBoundControl.valid,
      })),
      debounceTime(300),
      switchMap(({ upperBound, valid }) => {
        if (!valid) {
          return of({ valid });
        }
        return this.primeNumberService.getPrimeNumbers(upperBound).pipe(
          map((primes) => ({ valid, primes })),
          startWith({ valid })
        );
      })
    );
  }
}
