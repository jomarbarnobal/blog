import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token'
import { FormService, SIGN_UP_FORM  } from '../shared/form'
import { RegisterData } from '../shared'
import { Router } from '@angular/router'



@Component({
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
    providers: [ FormService ]
})

export class SignUpComponent {
    constructor(
        private _tokenService: Angular2TokenService,
        private _formService: FormService,
        private _router: Router
     ){
        this._formService.initForm(SIGN_UP_FORM)
        this._tokenService.init({
            apiPath: 'http://localhost:3000',
            // registerAccountPath: 'auth'
        })

        this._formService.submit$.subscribe(
            (data: RegisterData) => this._tokenService.registerAccount(data).subscribe(
                res => console.log(res),
                error => console.log(error)
            )
        )
    }

    // signInUser(){
    //     this._tokenService.registerAccount({
    //         email: 'example@mail.com',
    //         password: 'omizsaintr',
    //         passwordConfirmation: 'omizsaintr'
    //     }).subscribe (
    //         res => console.log(res),
    //         error => console.log(error)
    //     )
    // }
}