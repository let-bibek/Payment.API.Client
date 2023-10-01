import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetailsComponent } from './core/components/payment-details/payment-details.component';
import { PaymentDetailsFormComponent } from './core/components/payment-details/payment-details-form/payment-details-form.component';

const routes: Routes = [
  {
    path:"",
    component:PaymentDetailsComponent
  },
  {
    path:'paymentform',
    component:PaymentDetailsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
