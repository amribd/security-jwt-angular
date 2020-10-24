import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadExcelFileComponent } from './containers/upload-excel-file/upload-excel-file.component';


const routes: Routes = [
  { path: '', component: UploadExcelFileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadFilesRoutingModule { }
