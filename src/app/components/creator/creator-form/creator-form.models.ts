import { FormGroup, FormControl, Validators } from "@angular/forms";

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
        phoneNumber: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ]),
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
        ]),
        gitLabUrl: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ]),
        linkedInUrl: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ]),
        stackoverflowId:  new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ]),
      });
}