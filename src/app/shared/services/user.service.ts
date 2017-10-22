import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import { Roles } from '../model/roles';

@Injectable()
export class UserService extends BaseService {
    private urlGetLoggedInName = 'admin/getLoggedInName';
    private urlGetLoggedInRoles = 'admin/getLoggedInRoles';

    constructor (private http: Http) {
      super();
    }

    public getLoggedInName(): Observable<string> {
      return this.http.get(this.urlGetLoggedInName)
                      .map(x => this.extractData(x).name)
                      .catch(this.handleError);
    }

    public getRoles(): Observable<Roles> {
      return this.http.get(this.urlGetLoggedInRoles)
                      .map(this.extractData)
                      .catch(this.handleError);
    }

    public isAdmin() {
        return localStorage.getItem('hasAdminRight') || false
    }

    public isFinanceUser() {
        return this.isAdmin() || (localStorage.getItem('hasFinanceRight') || false)
    }
}
