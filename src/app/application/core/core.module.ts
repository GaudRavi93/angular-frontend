import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreComponent } from "./core.component";
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AppFooterComponent } from '../../shared/components/footer/app.footer.component';
import { AppTopBarComponent } from '../../shared/components/topbar/app.topbar.component';
import { TopbarV2Component } from 'src/app/shared/components/topbar-v2/topbar-v2.component';
import { AppSidebarComponent } from '../../shared/components/sidebar/app.sidebar.component';
import { AppMenuitemComponent } from '../../shared/components/menu-item/app.menuitem.component';

@NgModule({
    declarations: [
        CoreComponent,
        TopbarV2Component,
        AppTopBarComponent,
        AppFooterComponent,
        AppSidebarComponent,
        AppMenuitemComponent,
    ],
    imports: [
        RouterModule,
        BrowserModule,
        SharedModule,
    ],
    exports: [CoreComponent]
})
export class CoreModule { }
