import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
    templateUrl: './email-confirmation.component.html'
})

export class EmailConfirmationComponent {
    constructor(
        private _tokenService: Angular2TokenService
    ){
        this._tokenService.init({
            apiPath: 'https://blog-api-app.herokuapp.com'
        })
    }
}