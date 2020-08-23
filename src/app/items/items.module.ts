import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsListComponent } from './containers/items-list/items-list.component';
import { MaterialsModule } from '../materials/materials.module';
import { ObjectsComponent } from './components/objects/objects.component';


@NgModule({
  declarations: [ItemsListComponent, ObjectsComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MaterialsModule
  ]
})
export class ItemsModule { }
