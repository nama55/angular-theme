import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-archivalmaster-list',
  templateUrl: './archivalmaster-list.component.html',
  styleUrls: ['./archivalmaster-list.component.scss']
})
export class ArchivalmasterListComponent implements OnInit {
  public archivalMstForm: FormGroup;
  constructor() { }

  ngOnInit()
  {
    this.archivalMstForm = new FormGroup({
      archivalMstApplication: new FormControl('0'),
      archivalMstEvent: new FormControl('0'),
      archivalMstDate: new FormControl('0')
    })
  }

  public createArchival(archivalMstFormValue)
  {
    if (this.archivalMstForm.valid) {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(archivalMstFormValue))
    }
    else {
      alert('Please Fill Requeried Field');
    }
  }

}
