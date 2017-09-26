import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBox2Component } from './home-box-2.component';

describe('HomeBox2Component', () => {
  let component: HomeBox2Component;
  let fixture: ComponentFixture<HomeBox2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBox2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
