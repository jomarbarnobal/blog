import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { UserFieldComponent } from './form/fields';
import { FormService, FormComponent } from './form';
import { HeaderComponent } from './header';


@NgModule({
    imports: [ 
        ReactiveFormsModule, 
        RouterModule,
        CommonModule,
        MaterializeModule
        ],
    declarations: [ 
        HeaderComponent,
        UserFieldComponent,
        FormComponent
        ],
    exports: [ 
        HeaderComponent, 
        UserFieldComponent,
        FormComponent
        ]
})
export class SharedModule {}