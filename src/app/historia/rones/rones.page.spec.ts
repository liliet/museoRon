import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RonesPage } from './rones.page';

describe('RonesPage', () => {
  let component: RonesPage;
  let fixture: ComponentFixture<RonesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RonesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
