import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolunteersListComponent } from './volunteers-list.component';
import { VolunteersFormComponent } from './volunteers-form.component';

const routes: Routes = [
    { path: 'list', component: VolunteersListComponent },
    { path: 'new', component: VolunteersFormComponent },
    { path: 'edit/:id', component: VolunteersFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VolunteersRoutingModule { }
