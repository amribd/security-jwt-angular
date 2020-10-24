import { UpdateProduitComponent } from './containers/update-produit/update-produit.component';
import { CreateProduitComponent } from './containers/create-produit/create-produit.component';
import { ListProduitsComponent } from './containers/list-produits/list-produits.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ListProduitsComponent },
  { path: 'create', component: CreateProduitComponent },
  { path: 'update/:id', component: UpdateProduitComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }
