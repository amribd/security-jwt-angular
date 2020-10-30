import { IUser } from './../../../shared/models/i-users';
import { UsersService } from './../../../shared/services/users.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public userList: MatTableDataSource<IUser>;
  @ViewChild(MatPaginator, {static: false}) public paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) public sort: MatSort;
  public displayedColumns = ['id', 'firstName', 'lastName', 'userName', 'role'];
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((data: IUser[]) => {
      console.log(data);
      this.userList = new MatTableDataSource(data);
      this.userList.paginator = this.paginator;
      this.userList.sort = this.sort;
    });
  }



}
