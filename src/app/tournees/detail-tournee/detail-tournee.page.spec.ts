import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTourneePage } from './detail-tournee.page';

describe('DetailTourneePage', () => {
  let component: DetailTourneePage;
  let fixture: ComponentFixture<DetailTourneePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTourneePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTourneePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
