import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriasPage } from './industrias.page';

describe('IndustriasPage', () => {
  let component: IndustriasPage;
  let fixture: ComponentFixture<IndustriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustriasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
