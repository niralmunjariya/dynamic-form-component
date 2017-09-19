import { DynamicControlConfig } from './dynamic-form/dynamic-control.config';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formConfig: DynamicControlConfig[];
  constructor() {
    this.formConfig = [
      {
        type: 'text',
        name: 'username',
        label: 'Username',
        placeholder: 'Type username',
      }, {
        type: 'password',
        name: 'password',
        label: 'Password',
        placeholder: 'Type password',
      },
      {
        type: 'text',
        name: 'fullName',
        label: 'Full Name',
        placeholder: 'Type full name',
      }
    ];
  }

  onSubmit(event: any) {
    console.log('form submitted', event);
  }
}
