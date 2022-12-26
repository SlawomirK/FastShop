import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from '../listOfOrders/list/list.component';
import { MaterialsModule } from '../material/material.module';
import { sharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [OrdersComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }],//ustawienie potrzebne dla pipe lokalizujące zapis na europejski
  exports: [
    OrdersComponent,
    MatFormFieldModule,
    MatInputModule],
  imports: [
    CommonModule,
    MaterialsModule,
    MatFormFieldModule,
    MatInputModule,
    sharedModule,
    HttpClientModule
  ]
})
export class ListOfOrdersModule { }