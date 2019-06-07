import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AguardientePage } from './aguardiente.page';

describe('AguardientePage', () => {
  let component: AguardientePage;
  let fixture: ComponentFixture<AguardientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AguardientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AguardientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
