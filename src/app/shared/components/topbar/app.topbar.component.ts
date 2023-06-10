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
    isDarkMode: boolean = false;
    @ViewChild('topbarmenu') menu!: ElementRef;
    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    constructor(
        public coreService: CoreService,
        public authService: AuthService,
    ) { }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        const theme = this.isDarkMode ? 'lara-dark-indigo' : 'lara-light-indigo';
        const colorScheme = this.isDarkMode ? 'dark' : 'light';
        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        const newHref = themeLink.getAttribute('href')!.replace(this.coreService.config.theme, theme);

        this.coreService.config.colorScheme;
        this.replaceThemeLink(newHref, () => {
            this.coreService.config.theme = theme;
            this.coreService.config.colorScheme = colorScheme;
            this.coreService.onConfigUpdate();
        });
    }

    replaceThemeLink(href: string, onComplete: Function) {
        const id = 'theme-css';
        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        const cloneLinkElement = <HTMLLinkElement>themeLink.cloneNode(true);

        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');

        themeLink.parentNode!.insertBefore(cloneLinkElement, themeLink.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
            themeLink.remove();
            cloneLinkElement.setAttribute('id', id);
            onComplete();
        });
    }
}
