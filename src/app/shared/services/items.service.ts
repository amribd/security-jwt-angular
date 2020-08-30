import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public _link:string = "assets/data/data.json";
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this._link);
  }
}
