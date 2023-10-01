import { Component, OnInit } from '@angular/core';
import { PaymetDetailsService } from '../shared/paymet-details.service';
import { PaymentDetails } from '../shared/payment-details.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymetDetailsService, private toastr: ToastrService) { }

  // This method will be loaded when this component is fully loaded
  ngOnInit(): void {
    this.service.refreshList();
  }

  // Update
  paymentDetailItemClick(selectedRecord: PaymentDetails) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  // Delete
  deleteSelected(selectedRecordId: string) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.deletePaymentDetails(selectedRecordId)
        .subscribe({
          next: res => {
            this.service.list = res as PaymentDetails[];
            this.toastr.warning("Pyment has been deleted", "PaymentDetails App");
          },
          error: err => {
            console.log(err);
          }
        })
    }
  }


}
