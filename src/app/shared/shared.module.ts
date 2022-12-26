import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialsModule } from "../material/material.module";
import { DataTimeComponent } from "./data-time/data-time.component";
import { DropdownButtonComponent } from "./dropdown-button/dropdown-button.component";
import { OrderNameComponent } from "./order-name/order-name.component";



@NgModule({
  imports: [
    CommonModule,
    MaterialsModule],
  declarations: [
    DropdownButtonComponent,
    OrderNameComponent,
    DataTimeComponent
  ],
  exports: [
    DropdownButtonComponent,
    OrderNameComponent,
    DataTimeComponent
  ]
})
export class sharedModule { }