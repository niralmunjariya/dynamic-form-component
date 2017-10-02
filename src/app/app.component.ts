import { DynamicControlConfig } from './dynamic-form/dynamic-control.config';
import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  formConfig: DynamicControlConfig[];
  constructor() {
    this.formConfig = [
      {
        type: 'text',
        name: 'textInput',
        label: 'Text Input',
        placeholder: 'Type text',
        validate: {
          required: true,
          minLength: 2,
          maxLength: 10
        }
      }, {
        type: 'password',
        name: 'passwordInput',
        label: 'Password Input',
        placeholder: 'Type secret password',
        validate: {
          required: true
        }
      },
      {
        type: 'number',
        name: 'numberInput',
        label: 'Number Input',
        placeholder: 'Type Number',
        validate: {
          required: true,
          min: 0,
          max: 10
        }
      }, {
        type: 'submit',
        label: 'Console Data'
      },
      {
        type: 'radio',
        name: 'radioInput',
        label: 'Radio Button',
        validate: {
          required: true
        },
        properties: {
          group: 'radio-button',
          dataSource: {
            url: '',
            items: [
              {
                label: 'Option 1',
                value: 'option1'
              },
              {
                label: 'Option 2',
                value: 'option2'
              },
              {
                label: 'Option 3',
                value: 'option3'
              }
            ]
          }
        }
      },
      {
        type: 'checkbox',
        name: 'checkboxInput',
        label: 'Checkbox',
        validate: {
          required: true
        },
        properties: {
          dataSource: {
            url: '',
            items: [
              {
                label: 'Option 1',
                value: 'option1'
              },
              {
                label: 'Option 2',
                value: 'option2'
              },
              {
                label: 'Option 3',
                value: 'option3'
              }
            ]
          }
        }
      },
      {
        type: 'select',
        name: 'selectInput',
        label: 'Select Menu',
        validate: {
          required: true
        },
        properties: {
          url: '',
          dataSource: {
            items: [
              {
                label: 'Option 1',
                value: 'option1'
              },
              {
                label: 'Option 2',
                value: 'option2'
              },
              {
                label: 'Option 3',
                value: 'option3'
              }
            ]
          }
        }
      }, {
        type: 'datepicker',
        name: 'dateInput',
        label: 'Date Picker',
        validate: {
          required: true
        },
        placeholder: 'mm/dd/yyyy'
      }, {
        type: 'select-multiple',
        label: 'Multi Select',
        validate: {
          required: true
        },
        name: 'selectMultipleInput',
        properties: {
          dataSource: {
            remote: {
              url: 'assets/data.json'
            },
          }
        }
      },
      {
        type: 'toggle',
        validate: {
          required: true
        },
        label: 'Power',
        name: 'toggleSwitch',
        properties: {
          onLabel: 'ON',
          offLabel: 'OFF'
        }
      }
    ];
  }

  onSubmit(event: any) {
    console.log('form submitted', event);
  }
}
