import { ProduitsService } from './../../../shared/services/produits.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.scss']
})
export class CreateProduitComponent implements OnInit {

  public produitForm: FormGroup;
  constructor(private builder: FormBuilder,
              private produitsService: ProduitsService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.produitForm = this.builder.group({
      id: [],
      designation: [],
      price: [],
      quantite: []
    });
  }

  get id() { return this.produitForm.get('id'); }
  get designation() { return this.produitForm.get('designation'); }
  get price() { return this.produitForm.get('price'); }
  get quantite() { return this.produitForm.get('quantite'); }


  onSubmit() {
    const obj = {
      id: this.id.value,
      designation: this.designation.value,
      price: this.price.value,
      quantite: this.quantite.value,
     };
    this.produitsService.postProduit(obj).subscribe((p) => {
      console.log(obj);
      this.router.navigate(['/produits']);
      this.toastr.success('The product has been added successfully', p.designation);
    },
    (err) => {
      this.toastr.error('The product has faced some trouble', err);
    });
  }

}
