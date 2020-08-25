import { ReactiveFormsModule } from '@angular/forms';
import { BasicFormComponent } from './containers/basic-form/basic-form.component';
import { MaterialsModule } from './../materials/materials.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';


@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MaterialsModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
