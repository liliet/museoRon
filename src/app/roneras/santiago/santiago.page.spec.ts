import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantiagoPage } from './santiago.page';

describe('SantiagoPage', () => {
  let component: SantiagoPage;
  let fixture: ComponentFixture<SantiagoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantiagoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantiagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
