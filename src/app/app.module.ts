import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './../environments/environment';
import { CoreModule } from './application/core/core.module';
import { SharedModule } from './shared/modules/shared.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { UsersComponent } from './application/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotfoundComponent } from './application/auth/components/notfound/notfound.component';
import { AccessComponent } from './application/auth/components/access/access.component';
import { ErrorComponent } from './application/auth/components/error/error.component';

export function tokenGetter() {
    return localStorage.getItem("idToken");
}

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent,
        AccessComponent,
        ErrorComponent,
        UsersComponent
    ],
    imports: [
        CoreModule,
        SharedModule,
        BrowserModule,
        AppRoutingModule,
        AngularFireAuthModule,
        JwtModule.forRoot({
            config: {tokenGetter: tokenGetter}
        }),
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
    ],
    providers: [
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }