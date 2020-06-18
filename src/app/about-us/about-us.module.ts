import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'about-us', component: AboutusComponent },
    ])
  ]
})

export class AboutUsModule { }

