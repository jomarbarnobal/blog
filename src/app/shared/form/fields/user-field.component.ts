import { Component, Input, Output, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms'
import { FormBase } from '../../../shared/form';

@Component({
    selector: 'user-form-field',
    templateUrl: './user-field.component.html',
    styleUrls: ['./user-field.component.scss']
})

export class UserFieldComponent implements OnInit{
    @Input() question: FormBase;
    @Input() form: FormGroup;

    private _control: AbstractControl;

    ngOnInit(){
        this._control = this.form.controls[this.question.key] 
    }

    get isValid() {
        return this._control.valid
    }

}