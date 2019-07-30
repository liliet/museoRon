import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrensaPage } from './prensa.page';

describe('PrensaPage', () => {
  let component: PrensaPage;
  let fixture: ComponentFixture<PrensaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrensaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrensaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
