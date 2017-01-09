import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.route'

// import angular2 materialize css module
import {MaterializeModule } from 'angular2-materialize'

import { HeaderComponent } from './shared/header';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { SignInComponent } from './sign-in';
import { SignUpComponent } from './sign-up';
// import angular2-token service
import { Angular2TokenService } from 'angular2-token'

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routing
  ],
  providers: [ Angular2TokenService ],
  bootstrap: [AppComponent]
})
export class AppModule { }