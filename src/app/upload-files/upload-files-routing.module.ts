import { UploadImageComponent } from './containers/upload-image/upload-image.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadExcelFileComponent } from './containers/upload-excel-file/upload-excel-file.component';


const routes: Routes = [
  { path: '', component: UploadExcelFileComponent },
  { path: 'image', component: UploadImageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadFilesRoutingModule { }
