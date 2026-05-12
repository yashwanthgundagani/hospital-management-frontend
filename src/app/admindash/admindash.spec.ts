import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admindash } from './admindash';

describe('Admindash', () => {
  let component: Admindash;
  let fixture: ComponentFixture<Admindash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Admindash],
    }).compileComponents();

    fixture = TestBed.createComponent(Admindash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
