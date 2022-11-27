import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeGenerationComponent } from './components/prime-generation/prime-generation.component';

const routes: Routes = [{ path: '', component: PrimeGenerationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeGenerationRoutingModule {}
