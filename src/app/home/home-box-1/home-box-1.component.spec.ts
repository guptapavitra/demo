import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBox1Component } from './home-box-1.component';

describe('HomeBox1Component', () => {
  let component: HomeBox1Component;
  let fixture: ComponentFixture<HomeBox1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBox1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
