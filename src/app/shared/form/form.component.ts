import { Component } from '@angular/core';
import { FormService } from './form.service';
import { UserFieldComponent } from '../../shared/form/fields'

@Component({
    selector: 'user-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent {
    constructor(private _formService: FormService){}
}