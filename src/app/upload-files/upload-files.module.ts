import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { MaterialsModule } from './../materials/materials.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import { UploadFilesRoutingModule } from './upload-files-routing.module';
import { UploadExcelFileComponent } from './containers/upload-excel-file/upload-excel-file.component';


@NgModule({
  declarations: [UploadExcelFileComponent],
  imports: [
    CommonModule,
    UploadFilesRoutingModule,
    MaterialFileInputModule,
    MaterialsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class UploadFilesModule { }
