import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  public basePath = environment.url;

  constructor( private http: HttpClient) { }

  public getAllRoles(): Observable<any> {
    return this.http.get<any>(this.basePath + "/api/v1/roles");
  }


}
