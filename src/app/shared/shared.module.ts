import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenteredDirective } from './centered.directive';



@NgModule({
  declarations: [CenteredDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
