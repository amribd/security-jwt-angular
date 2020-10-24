import { ToastrService } from 'ngx-toastr';
import { ProduitsService } from './../../../shared/services/produits.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.scss']
})
export class UpdateProduitComponent implements OnInit {
  public produitForm: FormGroup;

  constructor(private builder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private produitsService: ProduitsService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.initForm();
    this.findProduit();
  }

  findProduit() {
    const id = this.route.snapshot.params.id;
    this.produitsService.getProduitById(id).subscribe((produit) => {
      this.produitForm = this.builder.group({
        id: [produit.id],
        designation: [produit.designation],
        price: [produit.price],
        quantite: [produit.quantite]
      });
    });
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
      quantite: this.quantite.value
    };
    this.produitsService.putProduit(obj.id, obj).subscribe((p) => {
      this.router.navigate(['produits']);
      this.toastr.success('the product has been updated', p.designation);
    },
    (err) => {
      this.toastr.error('An error occured', err);
    })
  }

}
