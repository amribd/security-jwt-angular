import { ItemsListComponent } from './containers/items-list/items-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: '', component: ItemsListComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ItemsRoutingModule {}