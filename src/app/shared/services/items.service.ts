import { IItems } from './../models/i-items';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public _link:string = "assets/data/data.json";
  public link: string = "http://localhost:8086/"
  constructor(private http: HttpClient) { }

  getItems(): Observable<IItems> {
    return this.http.get<IItems>(this.link + 'items');
  }

  getIndex(): Observable<any> {
    return this.http.get<any>(this.link);
  }

  
}
