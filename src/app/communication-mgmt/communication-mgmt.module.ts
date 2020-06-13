import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationManagementComponent } from './communication-management/communication-management.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CustomsModule } from './../customs/customs.module';


@NgModule({
  declarations: [CommunicationManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'communication-mgmt', component: CommunicationManagementComponent }
    ]),
    NgMultiSelectDropDownModule.forRoot(),
    CustomsModule
  ]
})
export class CommunicationMgmtModule { }
