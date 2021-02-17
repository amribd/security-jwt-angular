import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FileService } from './../../shared/services/file.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.scss']
})
export class ListFileComponent implements OnInit {
  filesList: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns: Array<string> = ['id', 'fileName', 'extension', 'user', 'downloadUrl', 'actions'];
  constructor(
    private fileService: FileService
  ) { }

  ngOnInit() {
    this.getFiles();
  }

  getFiles() {
    this.fileService.getFilesByUser().subscribe(
      (res) => {
        this.filesList = new MatTableDataSource(res);
        this.filesList.paginator = this.paginator;
        this.filesList.sort = this.sort;
      }
    );
  }

  downloadFile(file) {
    const fileName = file.fileName + '.' + file.extension;
    console.log(fileName);
    this.fileService.downloadFile(fileName).subscribe(
      res => {
        const blob = new Blob([res], { type: 'application/octet-stream' });

        var downloadURL = window.URL.createObjectURL(res);
        var link = document.createElement('a');
        link.href = downloadURL;
        link.download = fileName;
        link.click();
      }
    );
  }

}
