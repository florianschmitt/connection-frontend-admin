import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LanguageAdmin } from './../../shared/model/languageadmin';
import { BaseAdminService } from './../../shared/services/baseadmin.service';

@Injectable()
export class LanguageAdminService {
    private urlList = 'admin/language/all';
    private urlGet = 'admin/language/get';
    private urlSave = 'admin/language/save';
    private urlDelete = 'admin/language/delete';

    constructor(private adminService: BaseAdminService) { }

    list(): Observable<LanguageAdmin[]> {
        return this.adminService.list(this.urlList);
    }

    get(id: number): Observable<LanguageAdmin> {
        return this.adminService.get(this.urlGet, id);
    }

    delete(id: number): Observable<void> {
        return this.adminService.delete(this.urlDelete, id);
    }

    save(v: LanguageAdmin): Observable<void> {
        return this.adminService.save(this.urlSave, v);
    }
}
