import { DeleteDialogComponent } from './../../../shared/dialog/delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IProduit } from './../../../shared/models/i-produit';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ProduitsService } from './../../../shared/services/produits.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.scss']
})
export class ListProduitsComponent implements OnInit {
  displayedColumns: Array<string>;
  public produits: MatTableDataSource<IProduit>;
  @ViewChild(MatPaginator, {static: false}) public paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) public sort: MatSort;

  constructor(private produitsService: ProduitsService,
              private toastr: ToastrService,
              private router: Router,
              private dialog: MatDialog) { 
    this.displayedColumns = ['id', 'designation', 'price', 'quantite', 'actions'];
  }

  ngOnInit() {
    this.getProduits();
  }

  getProduits() {
    this.produitsService.getProduits().subscribe((res: any) => {
      this.produits = new MatTableDataSource(res);
      this.produits.paginator = this.paginator;
      this.produits.sort = this.sort;
    });
  }

  updateproduit(id) {
    this.router.navigate(['produits/update', id]);
  }

  openDialog(confirm: string) {
    return this.dialog.open(DeleteDialogComponent, {
      width: '390px',
      // position: { top: '250px', left: '650px'},
      // disableClose: false,
      data: {confirm: confirm}
    });
  }

  deleteproduit(id) {
    this.openDialog('Are you sure to delete this product?').afterClosed().subscribe((res) => {
      if(res) {
        this.produitsService.deleteProduit(id).subscribe((p) => {
          this.toastr.success('The product has been deleted', p.designation);
        },
        (err) => {
          this.toastr.error('An error occured', err);
        });
      }
    });
  }

  affectItem(idProduct: number) {
    
    this.produitsService.putAffectItemToProduit(idProduct, 2).subscribe(() => {
      this.toastr.success('The item was affected to the product');
    },
    (err) => {
      this.toastr.error('An error was occured');
    });
  }

  

 
}
