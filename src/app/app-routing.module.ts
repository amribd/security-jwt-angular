import { AuthGuard } from './authentication/guards/auth.guard';
import { LayoutComponent } from './ui/layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: 'auth', loadChildren:() => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
    { path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
        {path: 'users', loadChildren:() => import('./users/users.module').then(m => m.UsersModule)},
        {path: 'roles', loadChildren:() => import('./roles/roles.module').then(m => m.RolesModule)}
    ]}
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}