import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginDetails } from '../../interfaces/LoginDetails';
import { CoreService } from '../../../core/services/core.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    formSubmitted: boolean = false;
    valCheck: string[] = ['remember'];

    constructor(
        public coreService: CoreService,
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.createForm();
    }

    private createForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    async submitLoginForm(details: LoginDetails) {
        this.formSubmitted = true;
        if (this.loginForm.valid) {
            await this.authService.login(details);
            this.formSubmitted = false;
        }
    }
}
