import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeGenerationComponent } from './prime-generation.component';

describe('PrimeGenerationComponent', () => {
  let component: PrimeGenerationComponent;
  let fixture: ComponentFixture<PrimeGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeGenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
