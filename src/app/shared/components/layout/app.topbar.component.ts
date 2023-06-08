import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../../application/auth/services/auth.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        public authService: AuthService,
    ) { }
}
