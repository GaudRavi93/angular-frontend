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
                        routerLink: ['/dashboard']
                    },
                    {
                        label: 'User',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'User List',
                                icon: 'pi pi-fw pi-id-card',
                                // routerLink: ['/user']
                            },
                            {
                                label: 'Add User',
                                icon: 'pi pi-fw pi-plus',
                                routerLink: ['/user']
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
                        label: 'Error',
                        icon: 'pi pi-fw pi-times-circle',
                        routerLink: ['/error']
                      },
                      {
                        label: 'Access Denied',
                        icon: 'pi pi-fw pi-lock',
                        routerLink: ['/unauthorized']
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