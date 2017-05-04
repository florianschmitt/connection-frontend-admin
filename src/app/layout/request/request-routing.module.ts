import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestFormComponent } from './request-form.component';

const routes: Routes = [
    { path: 'edit/:id', component: RequestFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RequestRoutingModule { }
