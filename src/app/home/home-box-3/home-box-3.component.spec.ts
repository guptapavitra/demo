import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBox3Component } from './home-box-3.component';

describe('HomeBox3Component', () => {
  let component: HomeBox3Component;
  let fixture: ComponentFixture<HomeBox3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBox3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
