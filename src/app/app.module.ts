import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http"

// Bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';

//Angular Fire Base

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//routing Components
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';

//importing the Services

import { ProductService } from './product/product.service'

//components
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProductBoxComponent } from './product/product-box/product-box.component';
import { ProductListComponent } from './product/product-box/product-list/product-list.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { FooterComponent } from './footer/footer.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailsComponent,
    PageNotFoundComponentComponent,
    ProductBoxComponent,
    ProductListComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    CarouselModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
