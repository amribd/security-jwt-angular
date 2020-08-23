import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { BasicFormComponent } from './containers/basic-form/basic-form.component';
import { MaterialsModule } from '../materials/materials.module';


@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MaterialsModule
  ]
})
export class FormsModule { }
