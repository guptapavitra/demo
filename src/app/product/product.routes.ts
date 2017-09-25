import { Routes } from "@angular/router";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProducBoxComponent } from './produc-box/produc-box.component'

export const product_routes:Routes=[
    {path:'box',component: ProducBoxComponent},
    {path:'details',component:ProductDetailsComponent}
]