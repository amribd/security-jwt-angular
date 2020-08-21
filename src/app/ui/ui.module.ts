import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialsModule } from '../materials/materials.module';



@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [
    CommonModule,
    MaterialsModule
  ]
})
export class UiModule { }
