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
        .form-container{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #3270a0;
        }

        .form-content {
            
        }
        .form-inner {
            background: #eee;
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
            apiPath: 'http://localhost:3000',
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
        this._router.navigate(['sign-up-success']);
    }

    private _handleError(error: any){
        this._errors = error.json().errors.full_messages;
        this._formService.unlockSubmit();
    }

}