import { ValidationErrorComponent } from './validation-error/validation-error.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'ng2-select';
import { HttpClientModule } from '@angular/common/http';
import { RequiredFieldIndicatorDirective } from './required-field-indicator.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SelectModule,
    HttpClientModule
  ],
  exports: [DynamicFormControlComponent, DynamicFormComponent, RequiredFieldIndicatorDirective],
  declarations: [DynamicFormControlComponent, DynamicFormComponent, ValidationErrorComponent, RequiredFieldIndicatorDirective],
  entryComponents: [DynamicFormControlComponent, DynamicFormComponent]
})
export class DynamicFormModule { }
