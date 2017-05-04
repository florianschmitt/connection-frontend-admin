import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageAdminListComponent } from './languageadmin-list.component';
import { LanguageAdminFormComponent } from './languageadmin-form.component';

const routes: Routes = [
    { path: 'list', component: LanguageAdminListComponent },
    { path: 'new', component: LanguageAdminFormComponent },
    { path: 'edit/:id', component: LanguageAdminFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LanguageAdminRoutingModule { }
