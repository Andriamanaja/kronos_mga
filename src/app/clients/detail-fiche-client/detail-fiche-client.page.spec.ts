import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFicheClientPage } from './detail-fiche-client.page';

describe('DetailFicheClientPage', () => {
  let component: DetailFicheClientPage;
  let fixture: ComponentFixture<DetailFicheClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFicheClientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFicheClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
