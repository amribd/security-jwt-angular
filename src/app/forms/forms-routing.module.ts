import { BasicFormComponent } from './containers/basic-form/basic-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormGuardGuard } from './guards/form-guard.guard';


const routes: Routes = [
  { path:'', component: BasicFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
