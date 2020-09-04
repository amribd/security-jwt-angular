import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsListComponent } from './containers/items-list/items-list.component';
import { MaterialsModule } from '../materials/materials.module';
import { ObjectsComponent } from './components/objects/objects.component';
import { CreateItemsComponent } from './containers/create-items/create-items.component';
import { UpdateItemComponent } from './containers/update-item/update-item.component';


@NgModule({
  declarations: [ItemsListComponent, ObjectsComponent, CreateItemsComponent, UpdateItemComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MaterialsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class ItemsModule { }
