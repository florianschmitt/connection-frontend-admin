import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentListComponent } from './payment-list.component';
//import { UserFormComponent } from './payment-form.component';

const routes: Routes = [
    { path: 'list', component: PaymentListComponent },
    // { path: 'new', component: UserFormComponent },
    // { path: 'edit/:id', component: UserFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaymentRoutingModule { }
