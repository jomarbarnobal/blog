import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { Angular2TokenService } from 'angular2-token'

// Import component
import { SessionComponent } from './session';
import { SignInComponent } from './sign-in';
import { SignUpComponent } from './sign-up';
import { HomeComponent } from './home';


// const appRoutes: Routes = [
//     { path: '', redirectTo: '/home', pathMatch: 'full'},
//     { path: 'home', component: HomeComponent },
//     { path: 'sign-in', component: SignInComponent },
//     { path: 'sign-up', component: SignUpComponent }
// ]

const appRoutes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: 'home', component: HomeComponent, canActivate: [ Angular2TokenService] },

    { path: 'session', component: SessionComponent,
        children: [
            { path: 'sign-in', component: SignInComponent },
            { path: 'sign-up', component: SignUpComponent },
        ] 
    }
    
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);