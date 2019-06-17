import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurasPage } from './figuras.page';

describe('FigurasPage', () => {
  let component: FigurasPage;
  let fixture: ComponentFixture<FigurasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigurasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigurasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
