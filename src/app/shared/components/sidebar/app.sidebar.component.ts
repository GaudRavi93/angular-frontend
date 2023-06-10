import { Component, ElementRef, OnInit } from '@angular/core';
import { LayoutService } from '../../../application/core/app.layout.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})

export class AppSidebarComponent implements OnInit {
    model: any[] = [];

    constructor(
        public el: ElementRef,
        public layoutService: LayoutService
    ) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/layout/dashboard'] }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/access']
                            }
                        ]
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/notfound']
                    },
                ]
            }
        ];
    }
}

