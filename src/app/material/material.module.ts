import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const materials = [
MatCardModule,
MatFormFieldModule,
MatInputModule
];

@NgModule({
  imports: [materials],
  exports: [materials]
})
export class MaterialModule { }
