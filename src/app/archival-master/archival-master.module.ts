import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivalmasterListComponent } from './archivalmaster-list/archivalmaster-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ArchivalmasterListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'archival-master', component: ArchivalmasterListComponent }
    ])
  ]
})
export class ArchivalMasterModule { }
