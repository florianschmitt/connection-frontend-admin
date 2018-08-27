import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Template } from '../../shared/model/template';
import { BaseAdminService } from '../../shared/services/baseadmin.service';

@Injectable()
export class TemplatesService {
    private urlList = 'admin/templates/all';
    private urlGet = 'admin/templates/get';
    private urlSave = 'admin/templates/save';
    private urlDelete = 'admin/templates/delete';

    constructor(private adminService: BaseAdminService) { }

    list(): Observable<Template[]> {
        return this.adminService.list(this.urlList);
    }

    get(id: number): Observable<Template> {
        return this.adminService.get(this.urlGet, id);
    }

    delete(id: number): Observable<void> {
        return this.adminService.delete(this.urlDelete, id);
    }

    save(v: Template): Observable<void> {
        return this.adminService.save(this.urlSave, v);
    }
}
