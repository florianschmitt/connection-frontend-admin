import { Component, OnInit } from '@angular/core';
import { VolunteersService } from './volunteers.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import { Volunteer } from './../../shared/model/volunteer';
import { Language } from './../../shared/model/language';
import { LanguageService } from './../../shared/services/language.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'volunteers-form',
    templateUrl: './volunteers-form.component.html',
})
export class VolunteersFormComponent implements OnInit {
    languagesObservable: Observable<Language[]>;
    model = new Volunteer();
    msg: string;

    constructor(private volunteersService: VolunteersService,
      private languageService: LanguageService,
      private router: Router,
      private route: ActivatedRoute) { }

    ngOnInit() {
      this.refreshLanguages();
      this.route.params
        .filter((params: Params) => params['id'] != null)
        .switchMap((params: Params) => this.volunteersService.get(+params['id']))
        .subscribe((vol: Volunteer) => this.model = vol);
    }

    refreshLanguages() {
      this.languagesObservable = this.languageService.getLanguages();
    }

    onSubmit() {
      this.volunteersService.save(this.model)
              .subscribe(o => this.router.navigate(['volunteers/list']),
                error => this.msg = <any>error);
    }
}
