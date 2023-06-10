import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuitemComponent } from '../../shared/components/menu-item/app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from "./app.layout.component";
import { AppTopBarComponent } from '../../shared/components/topbar/app.topbar.component';
import { AppFooterComponent } from '../../shared/components/footer/app.footer.component';
import { AppSidebarComponent } from '../../shared/components/sidebar/app.sidebar.component';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppSidebarComponent,
        AppLayoutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule
    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
