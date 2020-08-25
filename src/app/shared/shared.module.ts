import { ForbidenDirective } from './directives/forbiden.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ForbidenDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
