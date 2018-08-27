import { Component, OnInit } from '@angular/core';
import { TemplatesService } from './templates.service';
import { Observable } from 'rxjs/Observable';
import { Template } from '../../shared/model/template';
import { LanguageService } from '../../shared/services/language.service';
import { FormatService } from '../../shared/services/format.service';

@Component({
    selector: 'templates-list',
    templateUrl: './templates-list.component.html',
})
export class TemplatesListComponent implements OnInit {
    public templates: Template[];
    public loading: boolean;

    constructor(private volunteersService: TemplatesService, private formatService: FormatService) { }

    ngOnInit() {
      this.volunteersService.list()
        .subscribe(data => this.templates = data);
    }

    private removeFromList(index: number) {
        this.templates.splice(index);
    }

    public delete(id: number, index: number) {
        this.volunteersService.delete(id)
            .subscribe(x => { },
            err => { },
            () => { this.removeFromList(index) });
    }
}
