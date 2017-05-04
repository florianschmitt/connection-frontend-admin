import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Payment } from '../model/payment';
import { BaseService } from './base.service';

@Injectable()
export class PaymentService extends BaseService {
  private urlAll = 'admin/payment/all';
  private urlForRequest = 'admin/payment/forRequest';
  private urlPlacePayment = 'admin/payment/placePayment';

  constructor (private http: Http, private requestOptions: RequestOptions) {
    super();
  }

  list(): Observable<Payment[]> {
    return this.http.get(this.urlAll)
                    .map(this.extractDataContent)
                    .catch(this.handleError);
  }

  forRequest(id: string): Observable<Payment[]> {
    let url = this.urlForRequest + "?requestIdentifier=" + id;
    return this.http.get(url)
                    .map(this.extractDataContent)
                    .catch(this.handleError);
  }

  placePayment(p: Payment): Observable<void> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions(this.requestOptions.merge({ headers: headers, url: this.urlPlacePayment }));

    return this.http.post(this.urlPlacePayment, p, options)
                    .catch(this.handleError);
  }
}
