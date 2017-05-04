import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './../../shared/model/user';
import { BaseAdminService } from './../../shared/services/baseadmin.service';

@Injectable()
export class UserService {
    private urlList = 'admin/systemuser/all';
    private urlGet = 'admin/systemuser/get';
    private urlSave = 'admin/systemuser/save';
    private urlDelete = 'admin/systemuser/delete';

    constructor(private adminService: BaseAdminService) { }

    list(): Observable<User[]> {
        return this.adminService.list(this.urlList);
    }

    get(id: number): Observable<User> {
        return this.adminService.get(this.urlGet, id);
    }

    delete(id: number): Observable<void> {
        return this.adminService.delete(this.urlDelete, id);
    }

    save(v: User): Observable<void> {
        return this.adminService.save(this.urlSave, v);
    }
}
