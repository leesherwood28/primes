import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeGenerationRoutingModule } from './prime-generation-routing.module';
import { PrimeGenerationComponent } from './components/prime-generation/prime-generation.component';


@NgModule({
  declarations: [
    PrimeGenerationComponent
  ],
  imports: [
    CommonModule,
    PrimeGenerationRoutingModule
  ]
})
export class PrimeGenerationModule { }
