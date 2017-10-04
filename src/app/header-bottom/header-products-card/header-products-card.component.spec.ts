import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProductsCardComponent } from './header-products-card.component';

describe('HeaderProductsCardComponent', () => {
  let component: HeaderProductsCardComponent;
  let fixture: ComponentFixture<HeaderProductsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderProductsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProductsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
