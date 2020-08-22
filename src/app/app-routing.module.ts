import { LayoutComponent } from './ui/layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
        {path: 'items', loadChildren: './items/items.module#ItemsModule'},
        // {path: 'items', loadChildren:() => import('./items/items.module').then(m => m.ItemsModule)},
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