import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulermasterSetComponent } from './schedulermaster-set/schedulermaster-set.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';   ///----------NT -18-02-2018

@NgModule({
  declarations: [SchedulermasterSetComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'scheduler-master', component: SchedulermasterSetComponent }
    ])
  ]
})
export class SchedulerMasterModule { }
