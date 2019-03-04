import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchPage } from './github-search.page';

describe('GithubSearchPage', () => {
  let component: GithubSearchPage;
  let fixture: ComponentFixture<GithubSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
