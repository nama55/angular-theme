import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventmasterCreateComponent } from './eventmaster-create/eventmaster-create.component';
import { EventmasterListComponent } from './eventmaster-list/eventmaster-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventmasterCreateComponent, EventmasterListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'event-master', component: EventmasterListComponent },
      { path: 'eventmaster-Add/:id', component: EventmasterCreateComponent }
      
    ])
  ]
  
})
export class EventMasterModule { }
