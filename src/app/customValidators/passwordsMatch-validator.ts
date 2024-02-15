import { AbstractControl, FormControl, FormGroup } from "@angular/forms";


export function passwordsMatchValidator(control: AbstractControl){
     let value =  control?.value;
     if ( ( value.pass  === value.confirmPass ) ){
          return null
     }else {
          console.log("pass" + value.pass)
          console.log("confirmpass" + value.confirmPass)
          return {
               'passwordMatches': {
                    valid: false
               }
          }
     }
}