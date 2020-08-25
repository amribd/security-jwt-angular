import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbidenDirective } from './directives/forbiden.directive';



@NgModule({
  declarations: [ForbidenDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
