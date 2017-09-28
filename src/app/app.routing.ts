import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//components
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AppComponent } from './app.component'
//importing the Child Routes


// import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path :'home', loadChildren: 'app/home/home.module#HomeModule'},
    { path :'products', loadChildren: 'app/products/products.module#ProductsModule'},
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