import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { DashboardComponent } from './dashboard.component';
import { DashboardsRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DashboardsRoutingModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
