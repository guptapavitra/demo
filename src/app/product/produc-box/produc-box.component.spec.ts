import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducBoxComponent } from './produc-box.component';

describe('ProducBoxComponent', () => {
  let component: ProducBoxComponent;
  let fixture: ComponentFixture<ProducBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
