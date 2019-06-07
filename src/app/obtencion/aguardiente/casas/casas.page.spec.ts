import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasPage } from './casas.page';

describe('CasasPage', () => {
  let component: CasasPage;
  let fixture: ComponentFixture<CasasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
