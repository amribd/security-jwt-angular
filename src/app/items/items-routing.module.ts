import { ItemsListComponent } from './containers/items-list/items-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: 'items', component: ItemsListComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: []
})

export class ItemsRoutingModule {}