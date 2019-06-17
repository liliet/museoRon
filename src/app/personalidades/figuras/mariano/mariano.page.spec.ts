import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarianoPage } from './mariano.page';

describe('MarianoPage', () => {
  let component: MarianoPage;
  let fixture: ComponentFixture<MarianoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarianoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarianoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
