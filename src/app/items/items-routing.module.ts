import { UpdateItemComponent } from './containers/update-item/update-item.component';
import { CreateItemsComponent } from './containers/create-items/create-items.component';
import { ObjectsComponent } from './components/objects/objects.component';
import { ItemsListComponent } from './containers/items-list/items-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: ItemsListComponent },
    { path: 'create', component: CreateItemsComponent },
    { path: 'update/:id', component: UpdateItemComponent }
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