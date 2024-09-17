import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPercentComponent } from './card-percent/card-percent.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardPercentComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
  ],
  exports: [
    CardPercentComponent,
  ]
})
export class ComponentsModule { }
