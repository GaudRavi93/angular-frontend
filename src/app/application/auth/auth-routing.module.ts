import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { AccessComponent } from './components/access/access.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LoginComponent },
        { path: 'login', component: LoginComponent },
        { path: 'access', component: AccessComponent },
        { path: 'error', component: ErrorComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
