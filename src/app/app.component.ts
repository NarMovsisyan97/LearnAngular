import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
  FormGroup,
} from '@angular/forms';
import { emailValidator } from './customValidators/email-validator';
import { passwordValidtaor } from './customValidators/password-validator';
import { passwordsMatchValidator } from './customValidators/passwordsMatch-validator';
import { phoneValidator } from './customValidators/phone-validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  

  myForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [emailValidator]],
    phones: this.formBuilder.array([
      this.formBuilder.control('+(374)', [Validators.required,phoneValidator]),
    ]),
    address: this.formBuilder.array([new FormControl('', Validators.required)]),
    birthday: ['', [Validators.required]],
    passwords: this.formBuilder.group(
      {
        pass: ['', [Validators.required, passwordValidtaor]],
        confirmPass: ['', [Validators.required, passwordValidtaor]],
      },
      {
        validators: [passwordsMatchValidator],
      }
    ),
  });

  ngOnInit(): void {
  }

  phonesArray = this.myForm.controls['phones'] as FormArray<FormControl>;
  addressArray = this.myForm.controls['address'] as FormArray<FormControl>;

  addPhone() {
    (<FormArray>this.myForm.controls['phones']).push(
      this.formBuilder.control('+(374)', [
        Validators.required,phoneValidator
      ])
    );
  }

  addAddress() {
    (<FormArray>this.myForm.controls['address']).push(
      this.formBuilder.control('', [Validators.required])
    );
  }

  removePhoneNumber(i: any) {
    (<FormArray>this.myForm.controls['phones']).removeAt(i);
  }

  removeAddress(i: any) {
    (<FormArray>this.myForm.controls['address']).removeAt(i);
  }

  // getUserBirthday(): Object {
  //   let birthday: any = this.myForm.value.birthday?.split('-');
  //   const userBirthday = {
  //     birthdayDay: '',
  //     birthdayMonth: '',
  //     birthdayYear: '',
  //   };
  //   return ({
  //     birthdayDay: birthday[2],
  //     birthdayMonth: birthday[1],
  //     birthdayYear: birthday[0],
  //   } = userBirthday);
  // }

  setUserInfo(event: any) {
    console.log(this.myForm.controls.passwords);
    console.log('pass: ' + this.myForm.controls.passwords.controls.pass.value);
    console.log(
      'confirmPass: ' +
        this.myForm.controls.passwords.controls.confirmPass.value
    );
    console.log(
      'pass != datark tox:' +
        ((this.myForm.controls.passwords.controls.pass.value as any) !== '')
    );
    console.log(
      'confirmPass != datark tox:' +
        ((this.myForm.controls.passwords.controls.confirmPass.value as any) !==
          '')
    );
    console.log(
      'passwordner havasar en:' +
        (this.myForm.controls.passwords.controls.confirmPass.value ===
          this.myForm.controls.passwords.controls.pass.value)
    );

    console.log(this.myForm);
  }

  getUserInfo() {}
}
