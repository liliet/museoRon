import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacardiPage } from './bacardi.page';

describe('BacardiPage', () => {
  let component: BacardiPage;
  let fixture: ComponentFixture<BacardiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacardiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacardiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
