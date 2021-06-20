import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

const materials = [
MatCardModule,
MatFormFieldModule,
MatInputModule,
MatButtonModule,
MatGridListModule,
MatIconModule
];

@NgModule({
  imports: [materials],
  exports: [materials]
})
export class MaterialModule { }
