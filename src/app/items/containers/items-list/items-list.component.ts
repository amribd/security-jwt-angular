import { IItems } from './../../../shared/models/i-items';
import { map } from 'rxjs/operators';
import { ItemsService } from './../../../shared/services/items.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { element } from 'protractor';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

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
              private itemService: ItemsService) {
  this.displayedColumns = ['name', 'description'];
               }

  ngOnInit() {
    this.getItems();
    this.itemService.getIndex().subscribe((res) => console.log(res));
  }

  getItems() {
    this.itemService.getItems().subscribe((res: any) => {
      console.log(res);
      this.items = new MatTableDataSource(res);
      this.items.paginator = this.paginator;
      this.items.sort = this.sort;
    });
  }

 

  
}
