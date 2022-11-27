import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-prime-generation',
  templateUrl: './prime-generation.component.html',
  styleUrls: ['./prime-generation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimeGenerationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
