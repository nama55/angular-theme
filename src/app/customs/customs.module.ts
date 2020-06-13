import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPopupComponent } from './details-popup/details-popup.component';



@NgModule({
  declarations: [DetailsPopupComponent],
  imports: [
    CommonModule
  ],
  exports:[DetailsPopupComponent]
})
export class CustomsModule { }
