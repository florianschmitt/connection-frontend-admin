import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { BaseService } from './base.service';
import { Feedback } from '../model/feedback';

@Injectable()
export class FeedbackService extends BaseService {
  private urlRequester = 'admin/feedback/requester';
  private urlVolunteer = 'admin/feedback/volunteer';

  constructor (private http: Http) {
    super();
  }

  public get(id: string): Observable<Feedback> {
    return this.http.get(this.urlRequester + '/' + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
}
