import { Component, OnInit } from '@angular/core';
import { TemplatesService } from './templates.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import { Template } from '../../shared/model/template';
import { Language } from '../../shared/model/language';
import { LanguageService } from '../../shared/services/language.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'templates-form',
    templateUrl: './templates-form.component.html',
})
export class TemplatesFormComponent implements OnInit {
    model = new Template();
    msg: string;

    constructor(private templatesService: TemplatesService,
      private router: Router,
      private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.params
        .filter((params: Params) => params['id'] != null)
        .switchMap((params: Params) => this.templatesService.get(+params['id']))
        .subscribe((vol: Template) => this.model = vol);
    }

    onSubmit() {
      this.templatesService.save(this.model)
              .subscribe(o => this.router.navigate(['templates/list']),
                error => this.msg = <any>error);
    }
}
