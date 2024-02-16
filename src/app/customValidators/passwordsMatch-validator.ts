import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";


export function passwordsMatchValidator(controlPass: AbstractControl): ValidatorFn{ 
     return (controlConfirmPass: AbstractControl): ValidationErrors | null => {
          if(controlPass.value === controlConfirmPass.value){
               return null
          }else {
               return {
                    passwordMatches: false
               }
          }
     }
     
}