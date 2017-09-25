import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//components
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/produc-box/product-list/product-list.component'
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AppComponent } from './app.component'
//importing the Child Routes
import { product_routes } from './product/product.routes';

// import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
    { path: '',   redirectTo: '/Home', pathMatch: 'full' },
    { path :'Home', component:AppComponent},
    { path :'product', component:ProductListComponent},
    { path :'product', component:ProductListComponent ,children:product_routes},
    { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
       // preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
 
  ]
})
export class AppRoutingModule { }