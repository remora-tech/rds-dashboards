import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
})
export class AngularMaterialModule { }
