import { UploadService } from './../../../shared/services/upload.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  public imageUpload: FormGroup;
  public imageGet: FormGroup;
  public file: File;
  public base64Data;
  public retrievedImage;
  constructor(
    private fb: FormBuilder,
    private uploadService: UploadService
  ) { }

    public get title() { return this.imageUpload.get('title'); }
    public get image() { return this.imageUpload.get('image'); }

    public get name() { return this.imageGet.get('name'); }

  ngOnInit() {
    this.initForm();
    this.initForm2();
  }

  initForm() {
    this.imageUpload = this.fb.group({
        title: [null],
        image: [null]
    });
  }

  initForm2() {
    this.imageGet = this.fb.group({
      name: [null]
    });
  }

  checkFormat() {
    const ends = this.image.value.files[0].name;
    if (!ends.endsWith('PNG') || !ends.endsWith('JPEG') || !ends.endsWith('JPG')) {
      this.image.setErrors({ invalidFile: "file's format is invalid" });
    }
  }

  onSubmit() {
    const obj = {
      title: this.title.value,
      image: this.image.value,
      file: this.image.value.files[0]
    };
    this.file = this.image.value.files[0];
    this.uploadService.uploadFile(this.file);
  }

  getImage() {
    this.uploadService.getImage(this.name.value).subscribe(
      (res) => {console.log(res);
        
          this.base64Data = res.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        },
      (err) => console.log(err)
    );
  }
}
