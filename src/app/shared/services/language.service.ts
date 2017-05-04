import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BaseService } from './base.service';
import { Language } from '../model/language';

@Injectable()
export class LanguageService extends BaseService {
  private url = 'getLanguages';
  private langsMap: Map<number, string>;

  constructor (private http: Http) {
    super();
    this.langsMap = new Map<number, string>()
    this.init();
  }

  init() {
    this.getLanguages()
      .subscribe(l => this.addLangs(l, this.langsMap));
  }

  addLangs(langs: Language[], langsMap: Map<number, string>) {
    for (let lang of langs) {
      langsMap.set(lang.id, lang.label);
    }
  }

  public getLang(id: number) {
    return this.langsMap.get(id);
  }

  public getLanguages(): Observable<Language[]> {
    let urlWithParams = this.url + '?locale=de';
    return this.http.get(urlWithParams)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
}
