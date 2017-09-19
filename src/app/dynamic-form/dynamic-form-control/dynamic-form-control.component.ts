// dynamic-form-control.component.ts
import { DynamicControlConfig } from './../dynamic-control.config';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-form-control',
  template: `
    <div [formGroup]="formGroup" class="form-group">
      <label>{{controlConfig.label}}</label>
      <input [type]="controlConfig.type" class="form-control"
      [placeholder]="controlConfig.placeholder" [formControlName]="controlConfig.name">
    </div>
  `
})
export class DynamicFormControlComponent {
  formGroup: FormGroup;
  controlConfig: DynamicControlConfig;
  constructor() { }
}
