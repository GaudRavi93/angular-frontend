import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './shared/services/spinner.service';
import { AuthService } from './application/auth/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private router: Router,
        private authService: AuthService,
        private primengConfig: PrimeNGConfig,
        public spinnerService: SpinnerService,
    ) {
        if(localStorage.getItem('idToken')){
            this.checkIsUserValid();
        } else {
            this.router.navigate(['auth/login'], { replaceUrl: true });
        }
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

    async checkIsUserValid() {
        if (this.authService.isAuthenticated()){
            if(window.location.pathname === '/')
            this.router.navigate(['/dashboard'], { replaceUrl: true })
            else
            this.router.navigate([window.location.pathname], { replaceUrl: true });
        } else {
            this.router.navigate(['auth/login'], { replaceUrl: true });
        }
    }
}
