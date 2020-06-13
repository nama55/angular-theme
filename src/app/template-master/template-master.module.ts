import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemplatemasterCreateComponent } from './templatemaster-create/templatemaster-create.component';
import { TemplatemasterListComponent } from './templatemaster-list/templatemaster-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomsModule } from './../customs/customs.module';
import { PaginationModule } from './../pagination/pagination.module';



@NgModule({
  declarations: [TemplatemasterCreateComponent, TemplatemasterListComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomsModule,
    ReactiveFormsModule,
    PaginationModule,
    RouterModule.forChild([
      { path: 'template-master', component: TemplatemasterListComponent },
      { path: 'templatemaster-Add/:id', component: TemplatemasterCreateComponent }
    ])
  ]
  
  //declarations: [],
  //bootstrap: []
})



export class TemplateMasterModule { }
