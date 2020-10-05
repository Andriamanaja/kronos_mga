import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOnePage } from './page-one.page';

describe('PageOnePage', () => {
  let component: PageOnePage;
  let fixture: ComponentFixture<PageOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
