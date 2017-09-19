// dynamic-form.component.ts
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { DynamicControlConfig } from './dynamic-control.config';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { ViewContainerRef, ComponentFactoryResolver, OnChanges } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <ng-container #container></ng-container>
      <button type="submit" class="btn btn-outline-primary">submit
    </button>
    </form>
  `
})
export class DynamicFormComponent implements OnChanges {
  _formConfig: DynamicControlConfig[];
  private cfr: ComponentFactoryResolver;
  public form: FormGroup;
  @Input()
  set formConfig(value: any) {
    this._formConfig = value;
  }
  @Output() formSubmit: EventEmitter<any>;
  @ViewChild('container', { read: ViewContainerRef })
  formContainer: ViewContainerRef;

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
        this.form.addControl(controlConfig.name, new FormControl());
        this.buildControl(controlConfig);
      });
    }
  }

  private buildControl(controlConfig: DynamicControlConfig): void {
    const factory = this.cfr.resolveComponentFactory(DynamicFormControlComponent);
    const control = this.formContainer.createComponent(factory);
    control.instance.controlConfig = controlConfig;
    control.instance.formGroup = this.form;
  }
}
