import { Component } from '@angular/core';
import { PaymetDetailsService } from '../../shared/paymet-details.service';
import { NgForm } from '@angular/forms';
import { PaymentDetails } from '../../shared/payment-details.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.scss']
})
export class PaymentDetailsFormComponent {

  constructor(public service: PaymetDetailsService, private toastr: ToastrService) { }

  showSuccessMesage() {
    this.toastr.success("Payment details saved successfully", "Payment Details App");
  }

  onSubmit(form: NgForm) {

    this.service.formSubmitted = true;
    if (form.valid) {
      if (this.service.formData.id == '263a8152-2480-428e-ab82-464e02e0f6g0')
        this.insertRecord(form);

      else
        this.updateRecord(form);

    }



  }
  insertRecord(form: NgForm) {
    this.service.postPymentDetails()
      .subscribe(
        {
          next: res => {
            this.service.list = res as PaymentDetails[];
            this.service.formReset(form);
            this.showSuccessMesage();
            console.log(res);
          },
          error: err => {
            console.log(err);
            this.toastr.error("Couldn't save the payment details", 'Payment Details App');
          }
        }
      )

  }

  updateRecord(form: NgForm) {
    this.service.putPaymentDetails()
      .subscribe(
        {
          next: res => {
            this.service.list = res as PaymentDetails[];
            this.service.formReset(form);
            this.toastr.info("Payment details updated", 'Payment Details App');
            console.log(res);
          },
          error: err => {
            console.log(err);
            this.toastr.error("Couldn't save the payment details", 'Payment Details App');
          }
        }
      )
  }

}
