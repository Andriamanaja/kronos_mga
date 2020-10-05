import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSixPage } from './page-six.page';

describe('PageSixPage', () => {
  let component: PageSixPage;
  let fixture: ComponentFixture<PageSixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSixPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
