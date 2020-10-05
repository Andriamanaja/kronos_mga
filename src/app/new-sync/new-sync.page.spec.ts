import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSyncPage } from './new-sync.page';

describe('NewSyncPage', () => {
  let component: NewSyncPage;
  let fixture: ComponentFixture<NewSyncPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSyncPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSyncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
