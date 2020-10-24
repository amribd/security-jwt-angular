import { LayoutComponent } from './ui/layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormGuardGuard } from './forms/guards/form-guard.guard';

const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
        // {path: 'items', loadChildren: './items/items.module#ItemsModule'},
        {path: 'items', loadChildren:() => import('./items/items.module').then(m => m.ItemsModule)},
        {path: 'forms', loadChildren:() => import('./forms/forms.module').then(m => m.FormsModule)},
        {path: 'projects', loadChildren:() => import('./projects/projects.module').then(m => m.ProjectsModule)},
        {path: 'produits', loadChildren:() => import('./produits/produits.module').then(m => m.ProduitsModule)},
        {path: 'upload', loadChildren:() => import('./upload-files/upload-files.module').then(m => m.UploadFilesModule)},
        {path: 'users', loadChildren:() => import('./users/users.module').then(m => m.UsersModule)},
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