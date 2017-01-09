import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _tokenServie: Angular2TokenService){
    this._tokenServie.init({
      apiPath: 'http://localhost:3000'
    })
  }
}
