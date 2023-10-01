import { Component } from '@angular/core';
import { PaymetDetailsService } from '../../shared/paymet-details.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.scss']
})
export class PaymentDetailsFormComponent {
  
  constructor(public service:PaymetDetailsService){}
  
  
  onSubmit(form: NgForm) {
    this.service.postPymentDetails()
    .subscribe(
      {
        next:res=>{
          console.log(res);
        },
        error:err=>{
          console.log(err);
        }
      }
    )

  }

}
