import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { UserFieldComponent } from './form/fields';
import { FormService, FormComponent } from './form';
import { HeaderComponent } from './header';
import { ErrorComponent } from './error';
import { UserSessionLink } from './links';
import { FooterComponent } from './footer';


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
        FormComponent,
        ErrorComponent,
        UserSessionLink,
        FooterComponent
        ],

    exports: [ 
        HeaderComponent, 
        UserFieldComponent,
        FormComponent,
        ErrorComponent,
        UserSessionLink,
        FooterComponent
        ]
})
export class SharedModule {}