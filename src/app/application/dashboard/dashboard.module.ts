import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DashboardsRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DashboardsRoutingModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
