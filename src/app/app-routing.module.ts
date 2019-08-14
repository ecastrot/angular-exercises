import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exercise1Component } from './exercise1/exercise1.component';
import { InvoiceWithChildrenComponent } from './exercise1/invoice-with-children/invoice-with-children.component';

const routes: Routes = [
  { path: '', component: Exercise1Component },
  { path: 'e1', component: InvoiceWithChildrenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
