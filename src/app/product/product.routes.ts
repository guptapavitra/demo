import { Routes } from "@angular/router";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductBoxComponent } from './product-box/product-box.component'

export const product_routes:Routes=[
    {path:'box',component: ProductBoxComponent},
    {path:'details',component:ProductDetailsComponent}
]