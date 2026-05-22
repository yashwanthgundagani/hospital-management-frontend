import { TestBed } from '@angular/core/testing';

import { Adminauthguard } from './adminauthguard';

describe('Adminauthguard', () => {
  let service: Adminauthguard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Adminauthguard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
