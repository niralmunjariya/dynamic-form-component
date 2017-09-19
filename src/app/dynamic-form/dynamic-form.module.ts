// dynamic-form.module.ts
import { DynamicFormComponent } from './dynamic-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [DynamicFormControlComponent, DynamicFormComponent],
  declarations: [DynamicFormControlComponent, DynamicFormComponent],
  entryComponents: [DynamicFormControlComponent, DynamicFormComponent]
})
export class DynamicFormModule { }
