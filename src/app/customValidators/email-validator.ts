import { FormControl } from "@angular/forms";

export function emailValidator(control: FormControl){
     let emailPatternRegex = /[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i;
     let value = control.value;

     let result = emailPatternRegex.test(value);

     if(result) {
          return null;
     } else {
          return {           
               emailPatternRegex: false
          }
     }
}