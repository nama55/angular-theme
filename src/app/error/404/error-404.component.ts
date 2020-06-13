import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { fadeInAnimation } from '../../core/route-animation/route.animation';

/* tslint:disable */
@Component({
    selector: 'app-error-404',
    templateUrl: './error-404-component.html',
    styleUrls: ['./error-404-component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[@fadeInAnimation]': 'true'
    },
    animations: [ fadeInAnimation ]
})
/* tslint:enable */

export class ErrorOneComponent implements OnInit {

    constructor(private pageTitleService: PageTitleService) {}

    ngOnInit() {
        this.pageTitleService.setTitle('404');
    }


}


