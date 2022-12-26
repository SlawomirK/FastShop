import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './listOfOrders/list/list.component';
import { OrderNameComponent } from './shared/order-name/order-name.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    OrderNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
