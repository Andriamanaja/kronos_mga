import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheVisitePage } from './fiche-visite.page';

describe('FicheVisitePage', () => {
  let component: FicheVisitePage;
  let fixture: ComponentFixture<FicheVisitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheVisitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheVisitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
