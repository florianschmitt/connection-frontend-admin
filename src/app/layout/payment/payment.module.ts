import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentRoutingModule } from './payment-routing.module';
import { PageHeaderModule } from './../../shared';
import { PaymentListComponent } from './payment-list.component';
import { PaymentListSingleComponent } from './payment-list-single.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaymentRoutingModule,
    PageHeaderModule
  ],
  declarations: [PaymentListComponent, PaymentListSingleComponent],
  exports: [PaymentListSingleComponent],
})
export class PaymentModule { }
