import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[requiredIndicator]'
})
export class RequiredFieldIndicatorDirective implements AfterViewInit {


  @Input() requiredIndicator: any;

  constructor(private el: ElementRef) {
    this.el = el;
  }

  ngAfterViewInit() {
    console.log('requiredIndicator', this.el.nativeElement);
    if (this.requiredIndicator && this.requiredIndicator.hasOwnProperty('required') && this.requiredIndicator.required === true) {
      this.el.nativeElement.classList.add('required');
    }
  }

}
