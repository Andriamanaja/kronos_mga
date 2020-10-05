import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionPage } from './discussion.page';

describe('DiscussionPage', () => {
  let component: DiscussionPage;
  let fixture: ComponentFixture<DiscussionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
