import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import { User } from './../../shared/model/user';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
    public users: User[];
    public loading: boolean;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.list()
            .subscribe(data => this.users = data);
    }

    private removeFromList(index: number) {
        this.users.splice(index);
    }

    public delete(id: number, index: number) {
        this.userService.delete(id)
            .subscribe(x => { },
            err => { },
            () => { this.removeFromList(index) });
    }
}
