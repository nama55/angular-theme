import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { RepositoryService } from './../../shared/services/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-eventmaster-create',
  templateUrl: './eventmaster-create.component.html',
  styleUrls: ['./eventmaster-create.component.scss']
})
export class EventmasterCreateComponent implements OnInit {

  public errorMessage = '';
  //public id = '';
  public eventMasterFormLabelName = 'Add Event';

  public eventMasterForm: FormGroup;

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit()
  {
    
    //this.id = this.route.snapshot.paramMap.get('id')
    if (this.route.snapshot.paramMap.get('id') != "0")
    {
      this.eventMasterFormLabelName = 'Edit Event';
    }
    this.eventMasterForm = new FormGroup({
      eventname: new FormControl('', [Validators.required, Validators.maxLength(50)])
    });
  }

  public validateControl(controlName: string) {

    if (this.eventMasterForm.controls[controlName].invalid && this.eventMasterForm.controls[controlName].touched) {
      return true;
    }

    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.eventMasterForm.controls[controlName].hasError(errorName)) {
      return true;
    }

    return false;
  }

  public createEvent(EventFormValue)
  {
    if (this.eventMasterForm.valid) {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(EventFormValue))
      //this.executeEventCreation(templateFormValue);
    }
    else {
      alert('Please Fill Requeried Field');
    }
  }

}
