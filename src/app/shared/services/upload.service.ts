import { Params } from '@angular/router';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  public path = environment.baseHost;
  constructor(
    private http: HttpClient
  ) { }
  public _link: string = "http://localhost:8086/upload";
  public link: string = "http://localhost:8086";

  public uploadExcel(file: File) {
    const formData = new FormData();
    formData.append('excelFile',file);
    this.http.post(this.link +'/excel', formData).subscribe(
      () => console.log("success"),
      () => console.log("erro")
    );
  }

  public uploadFile(file: File) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', null);
    headers.set('Accept', 'multipart/form-data');
    const params = new HttpParams();
    const formData = new FormData();
    formData.append('imageFile', file);
    this.http.post(this._link, formData, {params, headers}).subscribe(
      () => {console.log('success');},
      () => console.log("error")
    );
  }

  public getImage(name: string): Observable<any> {
    return this.http.get<any>(this.path + '/get/' + name);
  }
}
