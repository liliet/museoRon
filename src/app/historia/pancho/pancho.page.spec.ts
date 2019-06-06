import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchoPage } from './pancho.page';

describe('PanchoPage', () => {
  let component: PanchoPage;
  let fixture: ComponentFixture<PanchoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanchoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanchoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
