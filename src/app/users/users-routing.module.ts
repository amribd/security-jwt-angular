import { ListUsersComponent } from './containers/list-users/list-users.component';
import { CreateUserComponent } from './containers/create-user/create-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", component: ListUsersComponent },
  { path: "create", component: CreateUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
