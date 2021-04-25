import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export const strong = (controlName: string) =>
    (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];

        // set error if validation fails
        const hasNumber: boolean = /\d/.test(control.value);
        const hasUpper: boolean = /[A-Z]/.test(control.value);
        const hasLower: boolean = /[a-z]/.test(control.value);
        const valid: boolean = hasNumber && hasUpper && hasLower;
        if (!valid) {
            // return what´s not valid
            return control.setErrors({ strong: true });
        } else {
            control.setErrors(null);
        }
    };
