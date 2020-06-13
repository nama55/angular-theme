import { Component, OnInit } from '@angular/core';
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-schedulermaster-set',
  templateUrl: './schedulermaster-set.component.html',
  styleUrls: ['./schedulermaster-set.component.scss']
})
export class SchedulermasterSetComponent implements OnInit {
  time = { hour: 14, minute: 30 };
  meridian = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
  }


  constructor() { }

  ngOnInit() {
    
  }

}
