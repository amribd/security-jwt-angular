import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  public baseHost: string = environment.url;
  constructor(
    private http: HttpClient
  ) { }

  public uploadFile(file): Observable<any> {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post<any>(this.baseHost + "/file", formData);
  }

  getFilesByUser(): Observable<any> {
    return this.http.get<any>(this.baseHost + "/own/files");
  }

  downloadFile(fileName): Observable<any> {
    const httpOptions = {
      responseType: 'blob' as 'json'
    };
    
    return this.http.get<any>(this.baseHost + "/download/" + fileName, httpOptions);
  }
}
