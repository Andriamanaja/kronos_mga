import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgtestPage } from './imgtest.page';

describe('ImgtestPage', () => {
  let component: ImgtestPage;
  let fixture: ComponentFixture<ImgtestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgtestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgtestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
