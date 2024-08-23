import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { recordResolver } from './record.resolver';

describe('recordResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => recordResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
