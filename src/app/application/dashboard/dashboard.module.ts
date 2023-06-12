import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { PrimeNgFormsModules } from 'src/app/shared/modules/primeng-forms-module';

@NgModule({
    imports: [
        CommonModule,
        PrimeNgFormsModules,
        DashboardsRoutingModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
