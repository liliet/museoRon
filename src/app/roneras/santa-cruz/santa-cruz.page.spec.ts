import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaCruzPage } from './santa-cruz.page';

describe('SantaCruzPage', () => {
  let component: SantaCruzPage;
  let fixture: ComponentFixture<SantaCruzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantaCruzPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantaCruzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
