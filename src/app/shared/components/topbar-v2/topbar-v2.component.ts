import { MenuItem } from 'primeng/api';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CoreService } from '../../../application/core/services/core.service';
import { AuthService } from '../../../application/auth/services/auth.service';

@Component({
  selector: 'app-topbar-v2',
  templateUrl: './topbar-v2.component.html',
  styleUrls: ['./topbar-v2.component.scss'],
})

export class TopbarV2Component {

  items!: MenuItem[];
  @ViewChild('topbarmenu') menu!: ElementRef;
  @ViewChild('menubutton') menuButton!: ElementRef;
  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  constructor(
    public coreService: CoreService,
    public authService: AuthService
  ) {
    this.items = [
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
    ]
  }
}
