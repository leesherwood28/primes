import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-prime-generation',
  templateUrl: './prime-generation.component.html',
  styleUrls: ['./prime-generation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimeGenerationComponent implements OnInit {
  readonly upperBoundControl = new FormControl(null);

  constructor() {}

  ngOnInit(): void {}
}
