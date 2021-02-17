import { MaterialFileInputModule } from 'ngx-material-file-input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSortModule,
  MatPaginatorModule,
  MatSelectModule,
  MatIconModule,
  MatSnackBarModule,
  MatDialogModule,
  MatToolbarModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatCardModule
  
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MaterialFileInputModule

    
    
  ],
  exports: [
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FlexLayoutModule,
    MaterialFileInputModule
  ]
})
export class MaterialsModule { }
