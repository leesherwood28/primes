import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
} from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { PrimeNumberService } from 'src/app/core/prime-number/prime-number.service';
import { PrimeGenerationComponent } from './prime-generation.component';

export const ONE = 49;
export const TWO = 50;
export const THREE = 51;
export const FOUR = 52;
export const FIVE = 53;
export const SIX = 54;
export const SEVEN = 55;
export const EIGHT = 56;
export const NINE = 57;

export interface ModifierKeys {
  control?: boolean;
  alt?: boolean;
  shift?: boolean;
  meta?: boolean;
}

export function createKeyboardEvent(
  type: string,
  keyCode: number = 0,
  key: string = '',
  modifiers: ModifierKeys = {}
) {
  return new KeyboardEvent(type, {
    bubbles: true,
    cancelable: true,
    composed: true, // Required for shadow DOM events.
    view: window,
    keyCode: keyCode,
    key: key,
    shiftKey: modifiers.shift,
    metaKey: modifiers.meta,
    altKey: modifiers.alt,
    ctrlKey: modifiers.control,
  });
}

export function dispatchEvent<T extends Event>(
  node: Node | Window,
  event: T
): T {
  node.dispatchEvent(event);
  return event;
}

export function dispatchKeyboardEvent(
  node: Node,
  type: string,
  keyCode?: number,
  key?: string,
  modifiers?: ModifierKeys
): KeyboardEvent {
  return dispatchEvent(
    node,
    createKeyboardEvent(type, keyCode, key, modifiers)
  );
}

describe('PrimeGenerationComponent', () => {
  let component: PrimeGenerationComponent;
  let fixture: ComponentFixture<PrimeGenerationComponent>;
  let nativeElement: HTMLElement;
  let primeService: PrimeNumberService;

  const getPrimeOutput = () =>
    nativeElement.querySelector('prime-output') as HTMLElement | null;
  const getLoadingSpinner = () =>
    nativeElement.querySelector('loading-spinner') as HTMLElement | null;
  const getInput = () => nativeElement.querySelector('input');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PrimeGenerationComponent],
      providers: [PrimeNumberService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeGenerationComponent);
    primeService = TestBed.inject(PrimeNumberService);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially display an empty input', () => {
    fixture.whenStable();
    const input = getInput();
    expect(input).toBeTruthy();
    expect(input?.value).toBe('');
  });

  it('should initially display no primes', () => {
    fixture.whenStable();
    const primeOutput = getPrimeOutput();
    expect(primeOutput).toBeFalsy();
  });

  it('should call the service to grab the prime numbers', () => {
    spyOn(primeService, 'getPrimeNumbers').and.returnValue(
      cold('-', { a: [2, 3] })
    );

    dispatchKeyboardEvent(getInput() as HTMLInputElement, 'keydown', NINE);
    fixture.whenStable().then(() => {
      expect(primeService.getPrimeNumbers).toHaveBeenCalledWith(9);
    });
  });
});
