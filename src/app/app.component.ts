<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, Input } from '@angular/core';
>>>>>>> 3acfb2404818efdf5a10cab992e923abc10f1d03
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'page-wrapper',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
<<<<<<< HEAD

 constructor(
   private _router: Router,
   private _tokenService: Angular2TokenService
  ){
    this._tokenService.init() 
=======
  constructor(private _tokenService: Angular2TokenService){
    this._tokenService.init({
      apiPath: 'http://localhost:3000'
    })
>>>>>>> 3acfb2404818efdf5a10cab992e923abc10f1d03
  }
}
