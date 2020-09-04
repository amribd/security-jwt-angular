import { DeleteDialogComponent } from './../../../shared/dialog/delete-dialog/delete-dialog.component';
import { IItems } from './../../../shared/models/i-items';
import { map } from 'rxjs/operators';
import { ItemsService } from './../../../shared/services/items.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { element } from 'protractor';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  public items: MatTableDataSource<IItems>;
  public displayedColumns: Array<string>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private itemService: ItemsService,
              private dialog: MatDialog) {
  this.displayedColumns = ['id', 'name', 'description', 'actions'];
               }

  ngOnInit() {
    this.getItems();
    }

  getItems() {
    this.itemService.getItems().subscribe((res: any) => {
      console.log(res);
      this.items = new MatTableDataSource(res);
      this.items.paginator = this.paginator;
      this.items.sort = this.sort;
    });
  }

  create(row) {
    console.log(row)
    const id = row.id
    this.router.navigate([''])
  }

  updateItem(id) {
    this.router.navigate(['/items/update/' + id]);
  }

  deleteItem(id) {
    this.openDialog('Are you sure to delete this Item').afterClosed().subscribe((res) => {
      this.router.navigate(['/items']);
      if(res){
        // this.itemService.deleteItem(id).subscribe();
      }
      console.log(res);
    });
    }

  openDialog(str: string) {
    return this.dialog.open(DeleteDialogComponent, {
      width: '390px',
      // position: { top: '250px', left: '650px'},
      // disableClose: false,
      data: {str: str}
    });
  }



 

  
}
