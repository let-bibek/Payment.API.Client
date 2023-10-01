import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { PaymentDetails } from './payment-details.model';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PaymetDetailsService {

  constructor(private http: HttpClient) { }
  url: string = environment.apiBaseUrl + 'PaymentDetails';
  list: PaymentDetails[] = [];
  formData: PaymentDetails = new PaymentDetails();
  formSubmitted: boolean = false;

  //Get PaymentDetails
  refreshList() {
    this.http.get(this.url)
      .subscribe(
        {
          next: res => {
            this.list = res as PaymentDetails[];
          },
          error: err => {
            console.log(err);
          }

        }
      )
  }

  // Post payment det to the database
  postPymentDetails() {
    return this.http.post(this.url, this.formData);
  }

  formReset(form: NgForm) {
    this.formSubmitted = false;
    form.form.reset();
    this.formData = new PaymentDetails();
  }

  // Update payment details

  putPaymentDetails() {
    return this.http.put(this.url + "/" + this.formData.id, this.formData);
  }

  // Delete 
  deletePaymentDetails(id: string) {
    return this.http.delete(this.url + "/" + id);
  }
}
