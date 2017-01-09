import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token'

@Component({
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {
    constructor(private _tokenService: Angular2TokenService){
        this._tokenService.init({
            apiPath: 'http://localhost:3000',
            // registerAccountPath: 'auth'
        })
    }

    signInUser(){
        this._tokenService.registerAccount({
            email: 'example@mail.com',
            password: 'omizsaintr',
            passwordConfirmation: 'omizsaintr'
        }).subscribe (
            res => console.log(res),
            error => console.log(error)
        )
    }
}