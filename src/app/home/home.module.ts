import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRootComponent } from './home-root/home-root.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeBox1Component } from './home-box-1/home-box-1.component';
import { HomeBox2Component } from './home-box-2/home-box-2.component';
import { HomeBox3Component } from './home-box-3/home-box-3.component';

// Router
import { HomeRoutingModule } from './home.router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ClientListComponent } from './client-list/client-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule, HomeRoutingModule, CarouselModule
  ],
  declarations: [HomeRootComponent, CarouselComponent, HomeBox1Component, HomeBox2Component, HomeBox3Component, ClientListComponent, ContactUsComponent],

})
export class HomeModule { }
