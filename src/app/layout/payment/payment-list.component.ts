import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../shared/services/payment.service';
import { Observable } from 'rxjs/Observable';
import { Payment } from '../../shared/model/payment';
import { FormatService } from '../../shared/services/format.service';

@Component({
    selector: 'payment-list',
    templateUrl: './payment-list.component.html'
})
export class PaymentListComponent implements OnInit {

    public o: Observable<Payment[]>;

    constructor(private paymentService: PaymentService, private formatService: FormatService) { }

    ngOnInit() {
      this.o = this.paymentService.list();
    }

    public timestring(v: Payment) {
      return this.formatService.timestring(v.paymentBookedAt);
    }
}
