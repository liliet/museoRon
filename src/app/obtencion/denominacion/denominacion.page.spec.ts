import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenominacionPage } from './denominacion.page';

describe('DenominacionPage', () => {
  let component: DenominacionPage;
  let fixture: ComponentFixture<DenominacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenominacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenominacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
