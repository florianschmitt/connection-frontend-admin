import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {

  merge(options?: RequestOptionsArgs): RequestOptions {
    if (options.url != null && options.url.match(/assets/)){
      if (environment.production) {
        options.url = 'https://connection-koeln.herokuapp.com/adminui' + options.url;
        return super.merge(options);
      } else if (environment.testing) {
        options.url = 'https://florianschmitt.resolve.bar:8443/adminui' + options.url;
        return super.merge(options);
      } else {
        return super.merge(options);
      }
    }

    if (environment.production) {
      options.url = 'https://connection-koeln.herokuapp.com/' + options.url;
    } else if (environment.testing) {
      options.url = 'https://florianschmitt.resolve.bar:8443/' + options.url;
    } else {
      options.url = 'https://localhost:8443/../' + options.url;
    }

    var auth = localStorage.getItem('auth');
    var headers;

    if (options.headers == null) {
      options.headers = new Headers();
    }

    options.headers.append('Authorization', auth);

    return super.merge(options);
  }
}
