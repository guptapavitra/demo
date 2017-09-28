import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import serices
import { ProductService } from './services/product.service';
//import components
import { ProductImpressionsComponent } from './product-impressions/product-impressions.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


import { ProductBoxComponent } from './product-box/product-box.component';
import { HomeRoutingModule } from "./products.router";
import { ProductListComponent } from './product-box/product-list/product-list.component'
import { ProductComponent } from './product.component';
@NgModule({
  imports: [
    CommonModule, HomeRoutingModule
  ],
  declarations: [ ProductImpressionsComponent, 
                  ProductDetailComponent,
                  ProductBoxComponent,
                  ProductListComponent,
                  ProductComponent],
  providers:[ProductService]
})
export class ProductsModule { }
