import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsListComponent } from './containers/items-list/items-list.component';
import { MaterialsModule } from '../materials/materials.module';


@NgModule({
  declarations: [ItemsListComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MaterialsModule
  ]
})
export class ItemsModule { }
