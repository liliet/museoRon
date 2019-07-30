import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RonesCubaPage } from './rones-cuba.page';

describe('RonesCubaPage', () => {
  let component: RonesCubaPage;
  let fixture: ComponentFixture<RonesCubaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RonesCubaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RonesCubaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
