import { Component } from '@angular/core';
import { Angular2TokenService} from 'angular2-token'

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent {
    constructor(private _angularService: Angular2TokenService ) {
      this._angularService.init({
        apiPath: 'http://localhost:3000'
      })
    }
}
