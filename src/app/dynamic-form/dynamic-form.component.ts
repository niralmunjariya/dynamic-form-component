import { CustomValidator } from './custom-validator';
// dynamic-form.component.ts
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { DynamicControlConfig } from './dynamic-control.config';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { ViewContainerRef, ComponentFactoryResolver, OnChanges } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="form.valid && onSubmit()" #myForm="ngForm">
      <ng-container #container></ng-container>
      <div class="bx--form-item">
        <button type="submit" class="bx--btn bx--btn--primary">{{_buttonLabel || 'Submit'}}</button>
      </div>
    </form>
  `
})
export class DynamicFormComponent implements OnChanges, OnInit {
  _formConfig: DynamicControlConfig[];
  _buttonLabel: string;
  private cfr: ComponentFactoryResolver;
  public form: FormGroup;
  @Input()
  set formConfig(value: any) {
    this._formConfig = value;
  }
  @Output() formSubmit: EventEmitter<any>;
  @ViewChild('container', { read: ViewContainerRef })
  formContainer: ViewContainerRef;
  @ViewChild('myForm') formObject: any;

  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }

  constructor(cfr: ComponentFactoryResolver) {
    this.cfr = cfr;
    this.form = new FormGroup({});
    this.formSubmit = new EventEmitter<any>();
  }

  ngOnChanges() {
    if (this._formConfig) {
      this.formContainer.clear();
      this._formConfig.forEach(controlConfig => {
        if (controlConfig.type !== 'submit') {
          this.form.addControl(controlConfig.name, this.createControl(controlConfig));
          this.attachControl(controlConfig);
        }
      });
    }
  }

  ngOnInit() {
    const button = this._formConfig.find(config => {
      return config.type === 'submit';
    });
    if (button) {
      this._buttonLabel = button.label;
    }
  }

  private createControl(config): FormControl {
    let formControl = new FormControl();
    if (config.hasOwnProperty('validate')) {
      formControl = this.attachValidators(formControl, config.validate);
    }
    return formControl;
  }

  private attachValidators(control: FormControl, validate: any): FormControl {
    const validators = [];
    if (validate.hasOwnProperty('required') && validate.required === true) {
      validators.push(Validators.required);
    }
    if (validate.hasOwnProperty('minLength')) {
      validators.push(Validators.minLength(validate.minLength));
    }
    if (validate.hasOwnProperty('maxLength')) {
      validators.push(Validators.maxLength(validate.maxLength));
    }
    if (validate.hasOwnProperty('pattern')) {
      validators.push(Validators.pattern(validate.pattern));
    }
    if (validate.hasOwnProperty('min')) {
      validators.push(Validators.min(validate.min));
    }
    if (validate.hasOwnProperty('max')) {
      validators.push(Validators.max(validate.max));
    }
    if (validate.hasOwnProperty('between') && validate.between.hasOwnProperty('min') && validate.between.hasOwnProperty('max')) {
      validators.push(CustomValidator.between(validate.between.min, validate.between.max));
    }
    control.setValidators(validators);
    control.updateValueAndValidity();
    return control;
  }

  private attachControl(controlConfig: DynamicControlConfig): void {
    const factory = this.cfr.resolveComponentFactory(DynamicFormControlComponent);
    const control = this.formContainer.createComponent(factory);
    control.instance.controlConfig = controlConfig;
    control.instance.formGroup = this.form;
    control.instance.formObject = this.formObject;
  }
}
