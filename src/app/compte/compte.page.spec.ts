import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptePage } from './compte.page';

describe('ComptePage', () => {
  let component: ComptePage;
  let fixture: ComponentFixture<ComptePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
