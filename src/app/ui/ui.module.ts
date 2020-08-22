import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialsModule } from '../materials/materials.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';



@NgModule({
  declarations: [HeaderComponent, LayoutComponent, SideBarComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule
  ]
})
export class UiModule { }
