import { Component, OnInit} from '@angular/core';
import { Angular2TokenService} from 'angular2-token';
import { FormService, SIGN_IN_FORM } from '../shared/form';
import { SignInData } from '../shared'
import { Router } from '@angular/router'

@Component({
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    providers: [ FormService ]
})

export class SignInComponent {

    private _errors: string[];

    constructor(
        private _formService: FormService,
        private _tokenService: Angular2TokenService,
        private _router: Router
        ){
        this._formService.initForm(SIGN_IN_FORM)
        this._tokenService.init({
            apiPath: 'http://localhost:3000'
        })

        this._formService.submit$.subscribe(
            (data: SignInData) => this._tokenService.signIn(data).subscribe(
                (res: any) => this._hadleSucess(res),
                (error: any) => this._handleError(error)
            )
        )
    }
    
    private _hadleSucess(data: any){
        this._errors = null;
        this._formService.unlockSubmit();
        this._router.navigate([''])
    }

    private _handleError(error: any){
        this._errors = error.json().errors;
        this._formService.unlockSubmit();
    }
}