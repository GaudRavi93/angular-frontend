import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const PrimeNgModules = [
    MenuModule,
    ToastModule,
    TableModule,
    ChartModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    SidebarModule,
    PasswordModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    InputTextModule,
    InputTextModule,
    PanelMenuModule,
    RadioButtonModule,
    MultiSelectModule,
    InputTextareaModule,
    ProgressSpinnerModule
];

@NgModule({
    imports: [PrimeNgModules],
    exports: [PrimeNgModules],
})

export class PrimeNgFormsModules { }