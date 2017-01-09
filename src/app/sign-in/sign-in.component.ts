import { Component } from '@angular/core';
import { Angular2TokenService} from 'angular2-token';

@Component({
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent {

    constructor(private _tokenService: Angular2TokenService){
        this._tokenService.init({
            apiPath: 'http://localhost:3000'
        })
    }

    signUpUser(){
        this._tokenService.signIn({
            email: 'example@mail.com',
            password: 'omizsaintr',
        }).subscribe(
            res => console.log(res),
            error => console.log(error)
        )
    }

}