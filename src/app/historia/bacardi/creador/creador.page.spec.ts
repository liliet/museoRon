import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadorPage } from './creador.page';

describe('CreadorPage', () => {
  let component: CreadorPage;
  let fixture: ComponentFixture<CreadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
