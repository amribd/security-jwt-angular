import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { MaterialsModule } from './../materials/materials.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { ListRolesComponent } from './containers/list-roles/list-roles.component';
import { CreateRoleComponent } from './containers/create-role/create-role.component';


@NgModule({
  declarations: [ListRolesComponent, CreateRoleComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    MaterialsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class RolesModule { }
