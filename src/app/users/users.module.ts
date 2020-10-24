import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { MaterialsModule } from './../materials/materials.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './containers/create-user/create-user.component';
import { ListUsersComponent } from './containers/list-users/list-users.component';
import { LoginComponent } from './containers/login/login.component';


@NgModule({
  declarations: [CreateUserComponent, ListUsersComponent, LoginComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
