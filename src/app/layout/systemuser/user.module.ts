import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list.component';
import { UserFormComponent } from './user-form.component';
import { UserService } from './user.service';
import { PageHeaderModule } from './../../shared';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    PageHeaderModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  declarations: [UserListComponent, UserFormComponent],
  providers: [ UserService ]
})
export class UserModule { }
