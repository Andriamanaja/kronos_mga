import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTourneePage } from './liste-tournee.page';

describe('ListeTourneePage', () => {
  let component: ListeTourneePage;
  let fixture: ComponentFixture<ListeTourneePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTourneePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTourneePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
