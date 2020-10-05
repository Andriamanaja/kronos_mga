import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichesClientPage } from './fiches-client.page';

describe('FichesClientPage', () => {
  let component: FichesClientPage;
  let fixture: ComponentFixture<FichesClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichesClientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichesClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
