import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { InvoiceWithChildrenComponent } from './exercise1/invoice-with-children/invoice-with-children.component';
import { DashboardSalesComponent } from './exercise1/dashboard-sales/dashboard-sales.component';


@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    InvoiceWithChildrenComponent,
    DashboardSalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
