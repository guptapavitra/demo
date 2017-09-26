import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImpressionsComponent } from './product-impressions/product-impressions.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { HomeRoutingModule } from "./products.router";

@NgModule({
  imports: [
    CommonModule, HomeRoutingModule
  ],
  declarations: [ ProductImpressionsComponent, ProductDetailComponent ]
})
export class ProductsModule { }
