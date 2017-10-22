import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RequestRoutingModule } from './request-routing.module';
import { RequestFormComponent } from './request-form.component';
import { PageHeaderModule } from './../../shared';
import { PaymentModule } from '../payment/payment.module';
import { VoucherListSingleComponent } from './voucher-list-single.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FeedbackComponent } from './feedback.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RequestRoutingModule,
    PageHeaderModule,
    PaymentModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  declarations: [RequestFormComponent, VoucherListSingleComponent, FeedbackComponent],
  exports: [VoucherListSingleComponent],
})
export class RequestModule { }
