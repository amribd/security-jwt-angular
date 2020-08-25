import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function ForbidenControl(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if(control.value.trim() === 'omar')
    return {forbiden: true};
    return null;
  }
}

