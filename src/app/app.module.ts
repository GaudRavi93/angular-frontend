import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './../environments/environment';
import { SharedModule } from './shared/modules/shared.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppLayoutModule } from './application/core/app.layout.module';
import { NotfoundComponent } from './application/auth/components/notfound/notfound.component';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent
    ],
    imports: [
        SharedModule,
        BrowserModule,
        AppLayoutModule,
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
