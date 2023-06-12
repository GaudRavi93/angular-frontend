import { Component, ElementRef, OnInit } from '@angular/core';
import { CoreService } from '../../../application/core/services/core.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})

export class AppSidebarComponent implements OnInit {
    model: any[] = [];

    constructor(
        public el: ElementRef,
        public coreService: CoreService
    ) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/layout/dashboard']
                    },
                    {
                        label: 'User',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'User List',
                                icon: 'pi pi-fw pi-id-card',
                                // routerLink: ['/layout/user']
                            },
                            {
                                label: 'Add User',
                                icon: 'pi pi-fw pi-plus',
                                routerLink: ['/layout/user']
                            }
                        ]
                    }
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
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                // routerLink: ['/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                // routerLink: ['/access']
                            }
                        ]
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        // routerLink: ['/notfound']
                    },
                ]
            }
        ];
    }
}