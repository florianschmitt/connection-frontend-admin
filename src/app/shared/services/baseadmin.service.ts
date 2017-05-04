import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { BaseService } from './base.service';

@Injectable()
export class BaseAdminService extends BaseService {

    constructor(private http: Http, private requestOptions: RequestOptions) {
      super();
    }

    list<T>(url: string): Observable<T[]> {
        return this.http.get(url)
            .map(this.extractDataContent)
            .catch(this.handleError);
    }

    get<T>(urlGet: string, id: number): Observable<T> {
        let url = urlGet + '/' + id;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    delete(urlDelete: string, id: number): Observable<void> {
        let url = urlDelete + '/' + id;
        return this.http.delete(url)
            .catch(this.handleError);
    }

    save<T>(urlSave: string, v: T): Observable<void> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions(this.requestOptions.merge({ headers: headers, url: urlSave }));

        return this.http.post(urlSave, v, options)
            .catch(this.handleError);
    }
}
