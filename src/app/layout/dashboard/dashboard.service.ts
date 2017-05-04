import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { DashboardInfo } from './../../shared/model/dashboardinfo';
import { BaseService } from './../../shared/services/base.service';

@Injectable()
export class DashboardService extends BaseService {
  private urlInfo = 'admin/dashboard/info';

  constructor (private http: Http) {
    super();
  }

  info(): Observable<DashboardInfo> {
    return this.http.get(this.urlInfo)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
}
