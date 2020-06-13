import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<h1>TestComponent =--> Hello {{name}} !!</h1>'
})
export class TestComponent {
  name = 'World';
}
