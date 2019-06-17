import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RonerasPage } from './roneras.page';

describe('RonerasPage', () => {
  let component: RonerasPage;
  let fixture: ComponentFixture<RonerasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RonerasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RonerasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
