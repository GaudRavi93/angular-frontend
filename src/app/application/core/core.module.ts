import { NgModule } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { CoreComponent } from "./core.component";
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppFooterComponent } from '../../shared/components/footer/app.footer.component';
import { AppTopBarComponent } from '../../shared/components/topbar/app.topbar.component';
import { AppSidebarComponent } from '../../shared/components/sidebar/app.sidebar.component';
import { AppMenuitemComponent } from '../../shared/components/menu-item/app.menuitem.component';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppSidebarComponent,
        CoreComponent,
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
    exports: [CoreComponent]
})
export class CoreModule { }
