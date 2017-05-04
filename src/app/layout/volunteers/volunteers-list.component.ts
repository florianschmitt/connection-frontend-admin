import { Component, OnInit } from '@angular/core';
import { VolunteersService } from './volunteers.service';
import { Observable } from 'rxjs/Observable';
import { Volunteer } from './../../shared/model/volunteer';
import { LanguageService } from './../../shared/services/language.service';
import { FormatService } from './../../shared/services/format.service';

@Component({
    selector: 'volunteers-list',
    templateUrl: './volunteers-list.component.html',
})
export class VolunteersListComponent implements OnInit {
    public volunteers: Volunteer[];
    public loading: boolean;

    constructor(private volunteersService: VolunteersService, private formatService: FormatService) { }

    ngOnInit() {
      this.volunteersService.list()
        .subscribe(data => this.volunteers = data);
    }

    volunteerLanguages(v: Volunteer) {
      return this.formatService.joinLanguages(v.languageIds);
    }

    private removeFromList(index: number) {
        this.volunteers.splice(index);
    }

    public delete(id: number, index: number) {
        this.volunteersService.delete(id)
            .subscribe(x => { },
            err => { },
            () => { this.removeFromList(index) });
    }
}
