import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'page-wrapper',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app works!';

 constructor(
   private _router: Router,
   private _tokenService: Angular2TokenService
  ){
    this._tokenService.init({
      apiPath: 'http://localhost:3000'
    }) 
  }

}
