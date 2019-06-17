import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubaronPage } from './cubaron.page';

describe('CubaronPage', () => {
  let component: CubaronPage;
  let fixture: ComponentFixture<CubaronPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubaronPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubaronPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
