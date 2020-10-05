import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFourPage } from './page-four.page';

describe('PageFourPage', () => {
  let component: PageFourPage;
  let fixture: ComponentFixture<PageFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
