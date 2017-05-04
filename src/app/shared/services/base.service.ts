import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class BaseService {

    protected extractDataContent(res: Response) {
        let body = res.json().content;
        return body;
    }

    protected extractData(res: Response) {
        let data = res.json();
        return data;
    }

    protected extractText(res: Response) {
        let data = res.text();
        return data;
    }

    protected handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            //const err = body.error || JSON.stringify(body);
            const err = JSON.stringify(body);

            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
