import { MaterialsModule } from './../materials/materials.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { DeleteDialogComponent } from './dialog/delete-dialog/delete-dialog.component';



@NgModule({
  declarations: [HighlightDirective, DeleteDialogComponent],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports: [
    HighlightDirective,
    DeleteDialogComponent
    ],
  entryComponents: [
    DeleteDialogComponent
  ]
})
export class SharedModule { }
