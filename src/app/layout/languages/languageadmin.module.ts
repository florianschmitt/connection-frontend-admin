import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LanguageAdminRoutingModule } from './languageadmin-routing.module';
import { LanguageAdminListComponent } from './languageadmin-list.component';
import { LanguageAdminFormComponent } from './languageadmin-form.component';
import { LanguageAdminService } from './languageadmin.service';
import { PageHeaderModule } from './../../shared';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LanguageAdminRoutingModule,
    PageHeaderModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  declarations: [LanguageAdminListComponent, LanguageAdminFormComponent],
  providers: [ LanguageAdminService ]
})
export class LanguageAdminModule { }
