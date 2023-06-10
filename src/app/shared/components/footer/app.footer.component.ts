import { Component } from '@angular/core';
import { CoreService } from '../../../application/core/services/core.service';

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
    constructor(
        public coreService: CoreService
    ) { }
}
