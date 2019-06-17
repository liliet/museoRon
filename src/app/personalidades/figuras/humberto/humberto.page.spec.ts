import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumbertoPage } from './humberto.page';

describe('HumbertoPage', () => {
  let component: HumbertoPage;
  let fixture: ComponentFixture<HumbertoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumbertoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumbertoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
