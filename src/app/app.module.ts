import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.route';
import { SharedModule } from './shared';


// import angular2 materialize css module
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { SessionComponent } from './session';
import { SignInComponent } from './sign-in';
import { SignUpComponent } from './sign-up';
import { HomeComponent } from './home';
import { EmailConfirmationComponent } from './confirmation';
import { SuccesSignupComponent } from './success-signup';
// import angular2-token service
import { Angular2TokenService } from 'angular2-token';
import { PostService } from './shared/posts/';
import { FormService } from './shared/form';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    SessionComponent,
    EmailConfirmationComponent,
    SuccesSignupComponent,
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
  providers: [ 
    Angular2TokenService,
    PostService,
    FormService
    ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
