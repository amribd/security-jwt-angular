import { ListFileComponent } from './list-file/list-file.component';
import { UploadFileComponent } from './containers/upload-file/upload-file.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'upload', component: UploadFileComponent },
  { path: '', component: ListFileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
