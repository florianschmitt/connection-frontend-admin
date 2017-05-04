import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/partition';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Request } from './../../shared/model/request';
import { Language } from './../../shared/model/language';
import { Payment } from './../../shared/model/payment';
import { LanguageService } from './../../shared/services/language.service';
import { RequestService } from './../../shared/services/request.service';
import { FormatService } from './../../shared/services/format.service';
import { PaymentService } from '../../shared/services/payment.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PaymentListSingleComponent } from '../payment/payment-list-single.component';

@Component({
    selector: 'request-form',
    templateUrl: './request-form.component.html',
})
export class RequestFormComponent implements OnInit {
    model: Request;
    paymentAmount = 0;
    paymentComment: string;
    @ViewChild(PaymentListSingleComponent)
    private paymentListSingleComponent: PaymentListSingleComponent;

    constructor(private requestService: RequestService,
      private paymentService: PaymentService,
      private router: Router,
      private route: ActivatedRoute,
      private formatService: FormatService) { }

    ngOnInit() {
      this.load().subscribe((request: Request) => this.model = request);
    }

    private load(): Observable<Request> {
      var fromBackend = this.route.params.switchMap((params: Params) => this.requestService.get(params['id']));
      return fromBackend;
    }

    languages(v: Request) {
      return this.formatService.joinLanguages(v.languageIds);
    }

    timestringCreate(v: Request) {
      return this.formatService.timestring(v.createdAt);
    }

    timestring(v: Request) {
      return this.formatService.timestring(v.datetime);
    }

    canNotPlacePayment() {
      return this.paymentAmount <= 0;
    }

    placePayment() {
      var p = new Payment();
      p.requestId = this.model.requestIdentifier;
      p.paymentReceived = this.paymentAmount;
      p.comment = this.paymentComment;
      this.paymentService.placePayment(p)
        .subscribe(e => {
          this.paymentAmount = 0;
          this.paymentComment = "";
          this.paymentListSingleComponent.refresh();
        });
    }
}
