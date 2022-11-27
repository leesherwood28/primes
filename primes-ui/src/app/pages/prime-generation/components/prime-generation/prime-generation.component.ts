import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  combineLatest, map,
  Observable,
  of, startWith,
  switchMap
} from 'rxjs';
import { PrimeNumberService } from 'src/app/core/prime-number/prime-number.service';

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
  readonly upperBoundControl = new FormControl(null);
  readonly primeViewState$ = this.selectPrimesViewState();

  constructor(private primeNumberService: PrimeNumberService) {}

  ngOnInit(): void {}

  private selectPrimesViewState(): Observable<PrimeNumberViewState> {
    const upperBoundValue$ = this.upperBoundControl.valueChanges.pipe(
      startWith(this.upperBoundControl.value)
    );
    const upperBoundValid$ = this.upperBoundControl.valueChanges.pipe(
      startWith(this.upperBoundControl.valid),
      map(() => this.upperBoundControl.valid)
    );

    return combineLatest({
      upperBound: upperBoundValue$,
      valid: upperBoundValid$,
    }).pipe(
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
