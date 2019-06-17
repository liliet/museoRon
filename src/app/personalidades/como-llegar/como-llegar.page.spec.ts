import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoLlegarPage } from './como-llegar.page';

describe('ComoLlegarPage', () => {
  let component: ComoLlegarPage;
  let fixture: ComponentFixture<ComoLlegarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoLlegarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoLlegarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
