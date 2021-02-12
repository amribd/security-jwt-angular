import { CreateRoleComponent } from './containers/create-role/create-role.component';
import { ListRolesComponent } from './containers/list-roles/list-roles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ListRolesComponent },
  { path: 'create', component: CreateRoleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
