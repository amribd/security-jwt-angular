import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { MaterialsModule } from './../materials/materials.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { UploadFileComponent } from './containers/upload-file/upload-file.component';
import { ListFileComponent } from './list-file/list-file.component';


@NgModule({
  declarations: [
    UploadFileComponent,
    ListFileComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule,
    MaterialsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class FilesModule { }
