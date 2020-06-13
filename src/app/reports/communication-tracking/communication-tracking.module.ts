import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationTrackingComponent } from './communication-tracking/communication-tracking.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommunicationTrackingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'communication-tracking', component: CommunicationTrackingComponent }
    ])
  ]
})
export class CommunicationTrackingModule { }
