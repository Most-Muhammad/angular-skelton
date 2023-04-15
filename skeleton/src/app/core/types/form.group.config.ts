import { AbstractControlOptions, FormArray, ValidatorFn } from '@angular/forms';

export type FormGroupConfig<T> = {
  [P in keyof T]: T[P] extends any[]
    ? FormArray
    : [
        T[P] | { value: T[P]; disabled: boolean },
        (AbstractControlOptions | ValidatorFn | ValidatorFn[])?
      ];
};
