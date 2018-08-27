import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplatesListComponent } from './templates-list.component';
import { TemplatesFormComponent } from './templates-form.component';

const routes: Routes = [
    { path: 'list', component: TemplatesListComponent },
    { path: 'new', component: TemplatesFormComponent },
    { path: 'edit/:id', component: TemplatesFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TemplatesRoutingModule { }
