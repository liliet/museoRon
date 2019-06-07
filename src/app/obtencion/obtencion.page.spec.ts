import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtencionPage } from './obtencion.page';

describe('ObtencionPage', () => {
  let component: ObtencionPage;
  let fixture: ComponentFixture<ObtencionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtencionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtencionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
