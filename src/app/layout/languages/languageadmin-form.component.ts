import { Component, OnInit } from '@angular/core';
import { LanguageAdminService } from './languageadmin.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/partition';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { LanguageAdmin } from './../../shared/model/languageadmin';
import { Language } from './../../shared/model/language';
import { LanguageService } from './../../shared/services/language.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'languageadmin-form',
    templateUrl: './languageadmin-form.component.html',
})
export class LanguageAdminFormComponent implements OnInit {
    model: LanguageAdmin;
    msg: string;

    constructor(private service: LanguageAdminService,
      private languageService: LanguageService,
      private router: Router,
      private route: ActivatedRoute) { }

    ngOnInit() {
      this.load().subscribe(
        (x: LanguageAdmin) => this.model = x);
    }

    private load(): Observable<LanguageAdmin> {
      var [hasId, hasNoId] = this.route.params
        .partition((params: Params) => params['id'] != null);

      var backend = hasId.switchMap((params: Params) => this.service.get(+params['id']));
      var newInstance = hasNoId.map((params: Params) => this.createNew());
      return Observable.merge(newInstance, backend);
    }

    createNew(): LanguageAdmin {
      var r = new LanguageAdmin();
      r.initEmpty();
      return r;
    }

    localized() {
      return this.model.localized;
    }

    getTranslated(locale: string): string {
      if (locale == "de")
        return "Deutsch";
      if (locale == "en")
        return "Englisch";
      if (locale == "ar")
        return "Arabisch";
    }

    onSubmit() {
      this.service.save(this.model)
              .subscribe(o => this.router.navigate(['language/list']),
                error => this.msg = <any>error);
    }
}
