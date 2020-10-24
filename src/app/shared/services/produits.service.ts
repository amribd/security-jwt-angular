import { IItems } from './../models/i-items';
import { IProduit } from './../models/i-produit';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  public link: string =  "http://localhost:8086/";
  constructor(private http: HttpClient) { }

  getProduits(): Observable<IProduit> {
    return this.http.get<IProduit>(this.link + 'produits');
  }

  postProduit(produit: IProduit): Observable<IProduit> {
    return this.http.post<IProduit>(this.link + 'produit', produit);
  }

  getProduitById(id: number): Observable<any> {
    return this.http.get(this.link + 'produit/' + id);
  }

  putProduit(id: number, produit: IProduit): Observable<IProduit> {
    return this.http.put<IProduit>(this.link + 'produit/' + id, produit);
  }

  deleteProduit(id: number): Observable<any> {
    return this.http.delete<any>(this.link + 'produit/' + id);
  }

  putAffectItemToProduit(idProduct: number, item: number): Observable<any> {
    return this.http.put(this.link + 'produit/' + idProduct + '/affect-item', item);
  }
}
