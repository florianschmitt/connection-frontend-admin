import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LanguageService } from './language.service';
import { Request } from '../model/request';


@Injectable()
export class FormatService {

  constructor(private languageService: LanguageService) { }

  public joinLanguages(ids: number[]) {
    let result = "";
    let langs = new Array<string>();

    for (let id of ids) {
        var val = this.languageService.getLang(id);
        langs.push(val);
    }

    return langs.join(", ");
  }

  public address(v: Request) {
    return v.street  + " " + v.postalCode + " " + v.city;
  }

  public timestring(v: number[]) {
      let year = v[0];
      let month = this.pad(v[1]);
      let day = this.pad(v[2]);
      let hour = this.pad(v[3]);
      let min = this.pad(v[4]);
      return day + '.' + month + '.' + year + ' - ' + hour + ':' + min;
  }

  private pad(n: number) {
      return (n < 10) ? ('0' + n) : n;
  }
}
