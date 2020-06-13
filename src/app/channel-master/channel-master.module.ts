import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChannelmasterCreateComponent } from './channelmaster-create/channelmaster-create.component';
import { ChannelmasterListComponent } from './channelmaster-list/channelmaster-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChannelmasterCreateComponent, ChannelmasterListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'channel-master', component: ChannelmasterListComponent },
      { path: 'channelmaster-Add/:id', component: ChannelmasterCreateComponent }

    ])
  ]
})
export class ChannelMasterModule { }
