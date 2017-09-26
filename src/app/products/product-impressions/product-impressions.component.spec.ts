import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImpressionsComponent } from './product-impressions.component';

describe('ProductImpressionsComponent', () => {
  let component: ProductImpressionsComponent;
  let fixture: ComponentFixture<ProductImpressionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductImpressionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
