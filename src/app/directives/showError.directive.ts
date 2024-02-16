import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[showError]',
  standalone: true,
})
export class ShowErrorDirective {
  private errorBlocks: HTMLElement[] = [];
  private parent: HTMLElement;
  constructor(private element: ElementRef, private control: NgControl) {
    this.parent = this.element.nativeElement.parentNode as HTMLElement;
  }

  ngOnInit() {
    this.control.statusChanges?.subscribe(() => {
      this.showErrors();
    });
  }

  getErrorMessage(key: string): string {
    switch (key) {
      case 'required':
        return 'Required field';
      case 'emailPatternRegex':
        return 'Invalid Email';
      case 'valid':
        return 'Invalid Phone Number';
      case 'passwordRegexNumbers':
        return 'Must be one number';
      case 'passwordRegexSymbols':
        return 'Must be one symbol (!@#$%^&*+-)';
      case 'passwordRegexMinLength':
        return 'Minimum length 8';
      case 'passwordRegexMaxLength':
        return 'Maximum length 16';
      case 'passwordRegexUppercase':
        return 'Must be one uppercase letter';
      case 'passwordRegexLowercase':
        return 'Must be one lowercase letter';
      case 'passwordMatches':
        return 'Passwords do not match';
      default:
        return '';
    }
  }
  @HostListener('input') _() {
    this.showErrors();
  }
  @HostListener('blur') __() {
    this.showErrors();
  }

  private showErrors() {
    this.errorBlocks.forEach((p) => this.parent.removeChild(p));
    this.errorBlocks = [];
    const errorsArray = [];

    for (const key in this.control.errors) {
      if (this.control.errors[key] instanceof Object) {
        for (const errorsType in this.control.errors[key]) {
          errorsArray.push(this.getErrorMessage(errorsType));
        }
      } else {
        errorsArray.push(this.getErrorMessage(key));
      }
    }
    for (let error of errorsArray) {
      let p = document.createElement('p');
      p.classList.add('inValidError');
      p.innerText = error;

      this.errorBlocks.push(p);
      this.parent.appendChild(p);
    }
  }
}
