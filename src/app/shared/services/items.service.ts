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

  postItem(item: IItems): Observable<IItems> {
    return this.http.post<IItems>(this.link + 'item', item);
  }

  deleteItem(id): Observable<any> {
    return this.http.delete<any>(this.link + 'item/' + id);
  }

  updateItem(item: IItems, id: number): Observable<any> {
    return this.http.put<any>(this.link + 'item/' + id, item);
  }

  getItemById(id: number): Observable<any> {
    return this.http.get<any>(this.link + 'item/' + id);
  }
  
}
