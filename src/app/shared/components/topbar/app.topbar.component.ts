import { MenuItem } from 'primeng/api';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CoreService } from '../../../application/core/services/core.service';
import { AuthService } from '../../../application/auth/services/auth.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})

export class AppTopBarComponent {

    items!: MenuItem[];
    @ViewChild('topbarmenu') menu!: ElementRef;
    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    constructor(
        public coreService: CoreService,
        public authService: AuthService,
    ) { }
}
