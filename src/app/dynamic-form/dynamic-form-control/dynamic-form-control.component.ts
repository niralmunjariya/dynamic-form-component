import { ViewEncapsulation } from '@angular/core';
import { DynamicControlConfig } from './../dynamic-control.config';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormControlComponent implements OnInit {
  formGroup: FormGroup;
  controlConfig: DynamicControlConfig;
  formObject: any;
  constructor(private http: HttpClient, private el: ElementRef) {
    this.el = el;
  }

  ngOnInit(): void {
    if (this.controlConfig.hasOwnProperty('properties') &&
      this.controlConfig.properties.hasOwnProperty('dataSource') &&
      this.controlConfig.properties.dataSource.hasOwnProperty('remote')) {
      this.http.get(this.controlConfig.properties.dataSource.remote.url)
        .subscribe(data => {
          this.controlConfig.properties.dataSource.items = data;
        });
    }
  }

}
