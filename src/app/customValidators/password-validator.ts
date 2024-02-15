import { FormControl, ValidationErrors } from '@angular/forms';

export function passwordValidtaor(
  control: FormControl
): ValidationErrors | null {
  let value = control.value;
  const passwordPatternRegex = {
    passwordRegexNumbers: /\d+/.test(value),
    passwordRegexSymbols: /\W+/.test(value),
    passwordRegexMinLength: /^.{8,}$/.test(value),
    passwordRegexMaxLength: /^.{0,16}$/.test(value),
    passwordRegexUppercase: /[A-Z]/.test(value),
    passwordRegexLowercase: /[a-z]/.test(value),
  };

  //   if (!passwordPatternRegex.passwordRegexNumbers)
  //     return { passwordRegexNumbers: false };
  //   if (!passwordPatternRegex.passwordRegexSymbols)
  //     return { passwordRegexSymbols: false };
  //   if (!passwordPatternRegex.passwordRegexMinLength)
  //     return { passwordRegexMinLength: false };
  //   if (!passwordPatternRegex.passwordRegexMaxLength)
  //     return { passwordRegexMaxLength: false };
  //   if (!passwordPatternRegex.passwordRegexUppercase)
  //     return { passwordRegexUppercase: false };
  //   if (!passwordPatternRegex.passwordRegexLowercase)
  //     return { passwordRegexLowercase: false };

  let result = {

  }
  for (let key in passwordPatternRegex) {
    let error = passwordPatternRegex[key as keyof Object];
    if (!error) {
      result[key as keyof Object] = error
    }
  }
  return {
     result
  };

  // if ( passwordPatternRegex.passwordRegexNumbers &&
  //      passwordPatternRegex.passwordRegexSymbols &&
  //      passwordPatternRegex.passwordRegexMinLength &&
  //      passwordPatternRegex.passwordRegexMaxLength &&
  //      passwordPatternRegex.passwordRegexUppercase &&
  //      passwordPatternRegex.passwordRegexLowercase
  // ) {
  //      return null;
  // } else {
  //      return {
  //           {...passwordPatternRegex}
  //      }
  // }
}
