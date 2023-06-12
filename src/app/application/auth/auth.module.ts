import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AccessComponent } from './components/access/access.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AuthRoutingModule
    ],
    declarations: [
        LoginComponent,
        ErrorComponent,
        AccessComponent
    ]
})
export class AuthModule { }
