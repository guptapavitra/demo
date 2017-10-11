import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductImpressionsComponent } from "./product-impressions/product-impressions.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductBoxComponent } from './product-box/product-box.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-box/product-list/product-list.component'
const productRoutes: Routes = [
    { path: '', component: ProductComponent },
    {path:'box',component: ProductListComponent},
    { path: 'productName/:id', component: ProductDetailComponent }
    
   
];

@NgModule({
  imports: [ RouterModule.forChild(productRoutes) ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class HomeRoutingModule { }