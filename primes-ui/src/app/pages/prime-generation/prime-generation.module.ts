import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeGenerationRoutingModule } from './prime-generation-routing.module';
import { PrimeGenerationComponent } from './components/prime-generation/prime-generation.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [PrimeGenerationComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeGenerationRoutingModule,
  ],
})
export class PrimeGenerationModule {}
