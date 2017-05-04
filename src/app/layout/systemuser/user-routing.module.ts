import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { UserFormComponent } from './user-form.component';

const routes: Routes = [
    { path: 'list', component: UserListComponent },
    { path: 'new', component: UserFormComponent },
    { path: 'edit/:id', component: UserFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
