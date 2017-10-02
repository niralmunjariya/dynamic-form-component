import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'validation-error',
  templateUrl: './validation-error.component.html'
})
export class ValidationErrorComponent implements OnInit {

  @Input() group: any;
  @Input() config: any;
  @Input() form: any;
  constructor() { }

  ngOnInit() {
  }

}
