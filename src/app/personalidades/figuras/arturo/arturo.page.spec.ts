import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArturoPage } from './arturo.page';

describe('ArturoPage', () => {
  let component: ArturoPage;
  let fixture: ComponentFixture<ArturoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArturoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArturoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
