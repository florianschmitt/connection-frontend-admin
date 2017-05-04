import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { BaseService } from './base.service';

@Injectable()
export class PingService extends BaseService {
  private url = 'admin/ping';

  constructor (private http: Http) {
    super();
  }

  public ping(): Observable<String> {
    return this.http.get(this.url)
                    .catch(this.handleError);
  }
}
