import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/partition';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { User } from './../../shared/model/user';
import { Language } from './../../shared/model/language';
import { LanguageService } from './../../shared/services/language.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {
    model: User;
    msg: string;

    constructor(private userService: UserService,
      private router: Router,
      private route: ActivatedRoute) { }

    ngOnInit() {
      this.load().subscribe((user: User) => this.model = user);
    }

    private load(): Observable<User> {
      var [hasId, hasNoId] = this.route.params
        .partition((params: Params) =>  params['id'] != null);

      var userFromBackend = hasId.switchMap((params: Params) => this.userService.get(+params['id']));
      var userNew = hasNoId.map((params: Params) => new User());
      return Observable.merge(userNew, userFromBackend);
    }

    public isNew(): boolean {
      return this.model.id == null;
    }

    public passwordCaption(): string {
      if (this.isNew()) {
        return "Passwort";
      } else {
        return "Passwort ändern";
      }
    }

    onSubmit() {
      this.userService.save(this.model)
              .subscribe(o => this.router.navigate(['users/list']),
                error => this.msg = <any>error);
    }
}
