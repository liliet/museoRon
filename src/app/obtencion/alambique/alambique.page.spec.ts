import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlambiquePage } from './alambique.page';

describe('AlambiquePage', () => {
  let component: AlambiquePage;
  let fixture: ComponentFixture<AlambiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlambiquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlambiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
