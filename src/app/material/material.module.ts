import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';


const MATERIAL_MODULES=[
  MatTableModule,
  MatPaginatorModule,
  MatIconModule,
  MatFormFieldModule,
  MatDividerModule,
  MatGridListModule  
]
@NgModule({
  declarations: [],
  exports:[...MATERIAL_MODULES],

})
export class MaterialsModule { }
