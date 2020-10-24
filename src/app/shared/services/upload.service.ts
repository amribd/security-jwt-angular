import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient
  ) { }
  public _link: string = "http://localhost:8086/upload";
  public uploadFile(file: File) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', null);
    headers.set('Accept', 'multipart/form-data');
    const params = new HttpParams();
    const formData = new FormData();
    formData.append('file', file);
    this.http.post(this._link, formData, {params, headers}).subscribe(
      () => {console.log('success');},
      () => console.log("error")
    );
  }
}
