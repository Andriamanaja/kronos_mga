import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientPage } from './new-client.page';

describe('NewClientPage', () => {
  let component: NewClientPage;
  let fixture: ComponentFixture<NewClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
