import { TestBed } from '@angular/core/testing';

import { Docauthguard } from './docauthguard';

describe('Docauthguard', () => {
  let service: Docauthguard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Docauthguard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
