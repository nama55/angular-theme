import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { SuccessModalComponent } from './modals/success-modal/success-modal.component';
import { DatepickerDirective } from './directives/datapicker.directive';
import { DetailsPopupComponent } from '../customs/details-popup/details-popup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorModalComponent,
    SuccessModalComponent,
    DetailsPopupComponent,
    DatepickerDirective
],
  exports: [
      ErrorModalComponent,
      SuccessModalComponent,
      DetailsPopupComponent,
      DatepickerDirective
  ]
})
export class SharedModule { }
