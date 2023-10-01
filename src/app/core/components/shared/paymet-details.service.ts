import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { PaymentDetails } from './payment-details.model';
@Injectable({
  providedIn: 'root'
})
export class PaymetDetailsService {

  constructor(private http: HttpClient) { }
  url: string = environment.apiBaseUrl + 'PaymentDetails';
  list: PaymentDetails[] = [];
  formData: PaymentDetails = new PaymentDetails();
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

  // Post payment details to the database
  postPymentDetails() {
    return this.http.post(this.url, this.formData);
  }
}
