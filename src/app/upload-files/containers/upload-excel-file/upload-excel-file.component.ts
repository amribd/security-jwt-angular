import { UploadService } from './../../../shared/services/upload.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-excel-file',
  templateUrl: './upload-excel-file.component.html',
  styleUrls: ['./upload-excel-file.component.scss']
})
export class UploadExcelFileComponent implements OnInit {
public excelFile: File;
public form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private uploadService: UploadService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      fichier: [null, Validators.required]
    })
  }

  uploadFile() {
    this.uploadService.uploadFile(this.excelFile);
  }

}
