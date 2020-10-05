import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSevenPage } from './page-seven.page';

describe('PageSevenPage', () => {
  let component: PageSevenPage;
  let fixture: ComponentFixture<PageSevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSevenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
