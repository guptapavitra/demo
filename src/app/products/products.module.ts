import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
//import serices
import { ProductService } from './services/product.service';
//import components
import { ProductImpressionsComponent } from './product-impressions/product-impressions.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


import { ProductBoxComponent } from './product-box/product-box.component';
import { HomeRoutingModule } from "./products.router";
import { ProductListComponent } from './product-box/product-list/product-list.component'
import { ProductComponent } from './product.component';

import { MdDialogModule, MdButton } from '@angular/material';

import { CarouselModule } from 'ngx-bootstrap/carousel';

//importing the slim load bar
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';


@NgModule({
  imports: [
    CommonModule, 
    HomeRoutingModule,
    FormsModule,
    CarouselModule.forRoot(),
    MdDialogModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [  ProductImpressionsComponent,
                  ProductDetailComponent,
                  ProductBoxComponent,
                  ProductListComponent,
                  ProductComponent],
  exports:[ProductListComponent,
    ProductImpressionsComponent,
    SlimLoadingBarModule],
    entryComponents: [ProductImpressionsComponent],
  providers:[ProductService],
  
})
export class ProductsModule { }
