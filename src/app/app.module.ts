import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.route'
import { SharedModule } from './shared'


// import angular2 materialize css module
import {MaterializeModule } from 'angular2-materialize'
import { AppComponent } from './app.component';
import { HomeComponent } from './session';
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
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    routing
  ],
  providers: [ Angular2TokenService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
