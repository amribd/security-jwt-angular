import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function rangeNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>{
        if(control.value %10 === 0) 
        return { decimal: true};
        return null;
    } 
}