import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Volunteer } from './../../shared/model/volunteer';
import { BaseAdminService } from './../../shared/services/baseadmin.service';

@Injectable()
export class VolunteersService {
    private urlList = 'admin/volunteer/all';
    private urlGet = 'admin/volunteer/get';
    private urlSave = 'admin/volunteer/save';
    private urlDelete = 'admin/volunteer/delete';

    constructor(private adminService: BaseAdminService) { }

    list(): Observable<Volunteer[]> {
        return this.adminService.list(this.urlList);
    }

    get(id: number): Observable<Volunteer> {
        return this.adminService.get(this.urlGet, id);
    }

    delete(id: number): Observable<void> {
        return this.adminService.delete(this.urlDelete, id);
    }

    save(v: Volunteer): Observable<void> {
        return this.adminService.save(this.urlSave, v);
    }
}
