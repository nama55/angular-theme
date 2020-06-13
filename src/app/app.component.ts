import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'app';
  constructor(private router: Router) {

  }


}
