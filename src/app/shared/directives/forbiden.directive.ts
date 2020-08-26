import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function ForbidenControl(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if(control.value.trim().startsWith("+33"))
    return { forbiden: true};
    return null;
  }
}



// export function validateEmail(controlNameToCompare: string): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     if (control.value === null || control.value.length === 0) {
//       return null; // don't validate empty value
//     }
//     const controlToCompare = control.root.get(controlNameToCompare);
//     if (controlToCompare) {
//       const subscription: Subscription = controlToCompare.valueChanges.subscribe(
//         () => {
//           control.updateValueAndValidity();
//           subscription.unsubscribe();
//         }
//       );
//     }
//     return controlToCompare && controlToCompare.value !== control.value ? { 'notMatches': true } : null;
//  };
// }

