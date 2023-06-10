import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { portfolioEnum } from "../constants/website.enum";

export const urlValidator = (controlName: string): ValidatorFn => {

    let startingURL = ''
    switch (controlName) {
        case portfolioEnum.github:
            startingURL = portfolioEnum.GithubDotCom;
            break;
        case portfolioEnum.linkedIn:
            startingURL = portfolioEnum.LinkedInDotCom;
            break;

        default:
            startingURL = portfolioEnum.StackoverFlowDotCom;
            break;
    }


    return (control: AbstractControl): ValidationErrors | null => {
        return validateURL(control, startingURL) ? null : { inValidURL: true };
    };
};

function validateURL(control: AbstractControl<any, any>, startingURL: string) {
    return (control.value as string).startsWith(startingURL);
}

