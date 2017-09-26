import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductImpressionsComponent } from "./product-impressions/product-impressions.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const homeRoutes: Routes = [
    { path: '', component: ProductImpressionsComponent },
    { path: ':productName', component: ProductDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(homeRoutes) ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class HomeRoutingModule { }