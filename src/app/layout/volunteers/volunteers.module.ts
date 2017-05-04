import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VolunteersRoutingModule } from './volunteers-routing.module';
import { VolunteersListComponent } from './volunteers-list.component';
import { VolunteersFormComponent } from './volunteers-form.component';
import { VolunteersService } from './volunteers.service';
import { PageHeaderModule } from './../../shared';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VolunteersRoutingModule,
    PageHeaderModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  declarations: [VolunteersListComponent, VolunteersFormComponent],
  providers: [ VolunteersService ]
})
export class VolunteersModule { }
