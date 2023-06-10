import { FormGroup, FormControl, Validators } from "@angular/forms";
import { urlValidator } from "src/app/shared/validators/url.validators";

export function CREATOR_FORMS() {
    return new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ]),
        subtitle: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ]),
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ]),
        phoneNumber: new FormControl('0000000000'),
        country: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ]),
        technology: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ]),
        description: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ]),
        githubUrl: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
          urlValidator('github')
        ]),
        gitLabUrl: new FormControl('https://www.gitlab.com/'),
        linkedInUrl: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
          urlValidator('linkedIn')
        ]),
        stackoverflowId:  new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
          urlValidator('stackoverflow')
        ]),
      });
}


