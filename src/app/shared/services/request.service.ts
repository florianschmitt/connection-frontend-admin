import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BaseService } from './base.service';
import { Request } from '../model/request';
import { Voucher } from '../model/voucher';

@Injectable()
export class RequestService extends BaseService {
  private urlAll = 'admin/request/all';
  private urlGet = 'admin/request/get';
  private urlNotPayed = 'admin/request/notPayed';
  private urlGetAnswers = 'admin/request/getAnswers';

  constructor (private http: Http) {
    super();
  }

  public notPayed(): Observable<Request[]> {
    return this.http.get(this.urlNotPayed)
                    .map(this.extractDataContent)
                    .catch(this.handleError);
  }

  public all(): Observable<Request[]> {
    return this.http.get(this.urlAll)
                    .map(this.extractDataContent)
                    .catch(this.handleError);
  }

  public get(identifier: string): Observable<Request> {
    return this.http.get(this.urlGet + '/' + identifier)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public getAnswers(identifier: string): Observable<Voucher[]> {
    return this.http.get(this.urlGetAnswers + '/' + identifier)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
}
