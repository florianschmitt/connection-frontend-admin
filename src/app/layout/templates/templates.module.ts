import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesListComponent } from './templates-list.component';
import { TemplatesFormComponent } from './templates-form.component';
import { TemplatesService } from './templates.service';
import { PageHeaderModule } from '../../shared';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TemplatesRoutingModule,
    PageHeaderModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  declarations: [TemplatesListComponent, TemplatesFormComponent],
  providers: [ TemplatesService ]
})
export class TemplatesModule { }
