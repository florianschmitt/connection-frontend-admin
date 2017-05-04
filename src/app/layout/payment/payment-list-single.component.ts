import { Component, OnInit, Input } from '@angular/core';
import { PaymentService } from '../../shared/services/payment.service';
import { Observable } from 'rxjs/Observable';
import { Payment } from '../../shared/model/payment';
import { FormatService } from '../../shared/services/format.service';

@Component({
    selector: 'payment-list-single',
    templateUrl: './payment-list-single.component.html'
})
export class PaymentListSingleComponent implements OnInit {
    @Input() requestId: string;

    public o: Observable<Payment[]>;

    constructor(private paymentService: PaymentService, private formatService: FormatService) { }

    ngOnInit() {
      this.refresh();
    }

    public refresh() {
        this.o = this.paymentService.forRequest(this.requestId);
    }

    public timestring(v: Payment) {
      return this.formatService.timestring(v.paymentBookedAt);
    }
}
