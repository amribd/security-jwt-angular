import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FileService } from './../../../shared/services/file.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
public file: File;
public fileForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private fileService: FileService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.fileForm = this.formBuilder.group({
      fichier: [null, Validators.required]
    })
  }

  annuler() {
    this.fileForm.get('fichier').reset();
  }


  uploadFile() {
      this.file = this.fileForm.get('fichier').value.files[0];
      this.fileService.uploadFile(this.file).subscribe(
        (res) => res.status ? this.toastr.success(res.message): this.toastr.error(res.message),
        (err) => this.toastr.error(err)
      );
  }


}
