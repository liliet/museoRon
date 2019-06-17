import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneleriaPage } from './toneleria.page';

describe('ToneleriaPage', () => {
  let component: ToneleriaPage;
  let fixture: ComponentFixture<ToneleriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToneleriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToneleriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
