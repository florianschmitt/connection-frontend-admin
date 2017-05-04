import { Component, OnInit } from '@angular/core';
import { LanguageAdminService } from './languageadmin.service';
import { Observable } from 'rxjs/Observable';
import { LanguageAdmin } from './../../shared/model/languageadmin';
import { LanguageService } from './../../shared/services/language.service';

@Component({
    selector: 'languageadmin-list',
    templateUrl: './languageadmin-list.component.html',
})
export class LanguageAdminListComponent implements OnInit {
    public o: LanguageAdmin[];
    public loading: boolean;

    constructor(private service: LanguageAdminService, private languageService: LanguageService) { }

    ngOnInit() {
        this.service.list()
            .subscribe(data => this.o = data);
    }

    private removeFromList(index: number) {
        this.o.splice(index);
    }

    public delete(id: number, index: number) {
        this.service.delete(id)
            .subscribe(x => { },
            err => { },
            () => { this.removeFromList(index) });
    }
}
