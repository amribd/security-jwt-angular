import { RoleService } from './../../../shared/services/role.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.scss']
})
export class ListRolesComponent implements OnInit {

  public roleList: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: false}) public paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) public sort: MatSort;
  public displayedColumns = ['id', 'name'];

  constructor( private roleService: RoleService) { }

  ngOnInit() {

    this.roleService.getAllRoles().subscribe((data: any) => {
      console.log(data);
      this.roleList = new MatTableDataSource(data);
      this.roleList.paginator = this.paginator;
      this.roleList.sort = this.sort;
    });
  }

}
