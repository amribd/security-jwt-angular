import { ObjectsComponent } from './components/objects/objects.component';
import { ItemsListComponent } from './containers/items-list/items-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: '', component: ItemsListComponent},
    {path: 'objects/:id', component: ObjectsComponent }
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