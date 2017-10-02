import { AbstractControl, ValidatorFn, FormControl } from '@angular/forms';

export class CustomValidator {

  static between(min: number, max: number): ValidatorFn {
    return (control: FormControl) => {
      if (control.value > min && control.value < max) {
        return null;
      }
      return { inRange: false };
    };
  }
}
