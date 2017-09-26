import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeRootComponent } from './home-root/home-root.component';

const homeRoutes: Routes = [
    { path: '', component: HomeRootComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(homeRoutes) ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class HomeRoutingModule { }