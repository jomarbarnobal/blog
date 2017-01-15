import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token'
import { FormService, SIGN_UP_FORM  } from '../shared/form'
import { RegisterData } from '../shared'
import { Router } from '@angular/router'

import { 
    matchingPasswords, 
    emailValidator
} from '.././shared/validators'

@Component({
    templateUrl: './sign-up.component.html',
    styles: [`
        .form-content h4 {
            margin: 30px;
        }
        .session-link {
            padding: 10px;
        }
    `],
    providers: [ FormService ]
})

export class SignUpComponent {
    
    private _errors: string[];

    constructor(
        private _tokenService: Angular2TokenService,
        private _formService: FormService,
        private _router: Router
     ){
        this._formService.initForm(SIGN_UP_FORM)
        this._tokenService.init({
            apiPath: 'https://blog-api-app.herokuapp.com',
            registerAccountCallback: 'https://jomarbarnobal.github.io/blog/email-confirmation-success'
        })

        
        this._formService.submit$.subscribe(
            (data: RegisterData) => this._tokenService.registerAccount(data).subscribe(
                res => this._handleSuccess(res),
                error => this._handleError(error)
            )
        )
    }

    private _handleSuccess(data: any){
        this._errors = null;
        this._formService.unlockSubmit();
        this._router.navigate(['successfull-sign-up']);
    }

    private _handleError(error: any){
        this._errors = error.json().errors.full_messages;
        this._formService.unlockSubmit();
    }

}