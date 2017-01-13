import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  templateUrl: './logout.component.html'
})

export class SignOutComponent {
  constructor(
    private _tokenService: Angular2TokenService
  ){ 
    this._tokenService.init({
      apiPath: 'http://localhost:3000'
    })
  }

  logOut(){
    this._tokenService.signOut().subscribe(
      res => console.log(res),
      error => console.log(error)
    )
  }
} 