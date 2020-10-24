import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { MaterialsModule } from './../materials/materials.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { ListProduitsComponent } from './containers/list-produits/list-produits.component';
import { CreateProduitComponent } from './containers/create-produit/create-produit.component';
import { UpdateProduitComponent } from './containers/update-produit/update-produit.component';


@NgModule({
  declarations: [ListProduitsComponent, CreateProduitComponent, UpdateProduitComponent],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    MaterialsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class ProduitsModule { }
