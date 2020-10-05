import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFicheVisitePage } from './new-fiche-visite.page';

describe('NewFicheVisitePage', () => {
  let component: NewFicheVisitePage;
  let fixture: ComponentFixture<NewFicheVisitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFicheVisitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFicheVisitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
