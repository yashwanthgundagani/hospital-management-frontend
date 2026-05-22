import { TestBed } from '@angular/core/testing';

import { Docauth } from './docauth';

describe('Docauth', () => {
  let service: Docauth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Docauth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
