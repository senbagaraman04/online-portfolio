import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export const urlValidator = (controlName: string): ValidatorFn => {

    let startingURL = ''
    switch (controlName) {
        case 'github':
            startingURL = 'https://www.github.com/';
            break;
        case 'linkedIn':
            startingURL = 'https://www.linkedin.com/';
            break;

        default:
            startingURL = 'https://www.stackoverflow.com/';
            break;
    }


    return (control: AbstractControl): ValidationErrors | null => {
        return (control.value as string).startsWith(startingURL) ? null : { inValidURL: true };
    };
};