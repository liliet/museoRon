import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneleroPage } from './tonelero.page';

describe('ToneleroPage', () => {
  let component: ToneleroPage;
  let fixture: ComponentFixture<ToneleroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToneleroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToneleroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
