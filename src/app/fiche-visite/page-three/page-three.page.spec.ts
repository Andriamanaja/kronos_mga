import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThreePage } from './page-three.page';

describe('PageThreePage', () => {
  let component: PageThreePage;
  let fixture: ComponentFixture<PageThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
