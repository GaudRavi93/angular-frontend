import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private primengConfig: PrimeNGConfig,
        public spinnerService: SpinnerService,
    ) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
