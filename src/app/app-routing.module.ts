import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { CoreComponent } from './application/core/core.component';
import { UsersComponent } from './application/users/users.component';
import { ErrorComponent } from './application/auth/components/error/error.component';
import { AccessComponent } from './application/auth/components/access/access.component';
import { NotfoundComponent } from './application/auth/components/notfound/notfound.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: CoreComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: 'dashboard',
                        canActivate: [AuthGuard],
                        loadChildren: () => import('./application/dashboard/dashboard.module').then(m => m.DashboardModule)
                    },
                    {
                        path: 'user',
                        canActivate: [AuthGuard],
                        component: UsersComponent
                    }
                ]
            },
            {
                path: 'auth',
                loadChildren: () => import('./application/auth/auth.module').then(m => m.AuthModule)
            },
            { 
                path: 'notfound',
                component: NotfoundComponent
            },
            { 
                path: 'error',
                component: ErrorComponent
            },
            { 
                path: 'unauthorized',
                component: AccessComponent
            },
            {
                path: '**',
                redirectTo: '/notfound'
            }
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
