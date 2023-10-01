import { Component, OnInit } from '@angular/core';
import { PaymetDetailsService } from '../shared/paymet-details.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {


 constructor(public service:PaymetDetailsService){
  
 }
 // This method will be loaded when this component is fully loaded
  ngOnInit(): void {
    this.service.refreshList();
  }

}
