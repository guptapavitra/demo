import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

//importing the md dialog

import { MdDialogModule, MdButtonModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
//importing the slim load bar
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
//components

import { AppComponent } from './app.component';

import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { FooterComponent } from './footer/footer.component';

//importing for the entry componets from product '

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    FooterComponent,
    // ProductImpressionsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    SlimLoadingBarModule.forRoot()

  ],
  exports: [MdDialogModule,
            CdkTableModule,
            MdButtonModule,
            SlimLoadingBarModule],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
