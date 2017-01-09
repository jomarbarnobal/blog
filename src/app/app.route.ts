import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

// Import component
import { HomeComponent } from './home';
import { SignInComponent } from './sign-in';
import { SignUpComponent } from './sign-up';


const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);