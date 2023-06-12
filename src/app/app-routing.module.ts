import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './application/core/core.component';
import { UsersComponent } from './application/users/users.component';
import { NotfoundComponent } from './application/auth/components/notfound/notfound.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'layout', component: CoreComponent,
                children: [
                    { path: '', loadChildren: () => import('./application/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'user', component: UsersComponent },
                    { path: 'dashboard', loadChildren: () => import('./application/dashboard/dashboard.module').then(m => m.DashboardModule) },
                ]
            },
            { path: '', loadChildren: () => import('./application/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
