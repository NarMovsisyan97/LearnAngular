import { FormControl, ValidationErrors } from "@angular/forms";

export function phoneValidator(control: FormControl): ValidationErrors | null {
     let value = control.value;
     let phoneRegex = /^[+]?[(]?[0-9]{1,3}[)]?[-s.]?[0-9]{2}[-s.]?[0-9]{3}?[-s.]?[0-9]{3}$/;
     let result =  phoneRegex.test(value);

     if(result) {
          return null
     } else {
          return {
               valid: false
          }
     }
}