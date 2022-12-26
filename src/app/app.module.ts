import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfOrdersModule } from './list-of-orders/list-of-orders.module';
import { OrdersComponent } from './listOfOrders/list/list.component';

import { OrderNameComponent } from './shared/order-name/order-name.component';

@NgModule({
  declarations: [
    AppComponent        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListOfOrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
