import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';

@Injectable()
export class UserService extends BaseService {
    private urlGetLoggedInName = 'admin/systemuser/getLoggedInName';

    constructor (private http: Http) {
      super();
    }

    public getLoggedInName(): Observable<string> {
      return this.http.get(this.urlGetLoggedInName)
                      .map(x => this.extractData(x).name)
                      .catch(this.handleError);
    }
}
