import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const PrimeNgModules = [
    MenuModule,
    FormsModule,
    ToastModule,
    TableModule,
    ChartModule,
    ButtonModule,
    MenubarModule,
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
    ReactiveFormsModule,
    ProgressSpinnerModule
];

@NgModule({
    imports: [PrimeNgModules],
    exports: [PrimeNgModules],
})

export class PrimeNgFormsModules { }