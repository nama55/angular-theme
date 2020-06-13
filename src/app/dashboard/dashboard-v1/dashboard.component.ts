import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import {fadeInAnimation} from '../../core/route-animation/route.animation';

/* tslint:disable */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-component.html',
  styleUrls: ['./dashboard-component.scss'],
  encapsulation: ViewEncapsulation.None,
    host: {
      '[@fadeInAnimation]': 'true'
    },
    animations: [ fadeInAnimation ]
})
/* tslint:enable */

export class DashboardComponent implements OnInit  {

  constructor( private pageTitleService: PageTitleService) {
  }
  ngOnInit() {
    this.pageTitleService.setTitle('Home');
  }

}
