import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './../environments/environment';
import { CoreModule } from './application/core/core.module';
import { SharedModule } from './shared/modules/shared.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { UsersComponent } from './application/users/users.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NotfoundComponent } from './application/auth/components/notfound/notfound.component';

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent,
        UsersComponent
    ],
    imports: [
        SharedModule,
        BrowserModule,
        CoreModule,
        AppRoutingModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }