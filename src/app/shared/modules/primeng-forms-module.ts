import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
const PrimeNgModules = [
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    PasswordModule,
    ProgressSpinnerModule
];

@NgModule({
    imports: [PrimeNgModules],
    exports: [PrimeNgModules],
})

export class PrimeNgFormsModules { }