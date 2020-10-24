import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public userList: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: false}) public paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) public sort: MatSort;
  public displayedColumns = ['id', 'firstName', 'lastName', 'userName', 'password'];
  constructor() { }

  ngOnInit() {
  }



}
