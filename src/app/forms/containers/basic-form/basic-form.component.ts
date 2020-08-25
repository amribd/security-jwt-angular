import { ForbidenControl } from 'src/app/shared/directives/forbiden.directive';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, Form, FormBuilder } from '@angular/forms';
import { rangeNumber } from 'src/app/shared/directives/range.directive';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  forms: FormGroup;
  constructor(private fb: FormBuilder) { }

  get firstName() { return this.forms.get('user.firstName'); }
  get lastName() { return this.forms.get('user.lastName'); }
  get age() { return this.forms.get('age'); }
  get hobbies() { return this.forms.get('hobbies'); }

  ngOnInit() {
    // this.forms = new FormGroup({
    //   'user': new FormGroup({
    //     'firstName': new FormControl('null', [Validators.required]),
    //     'lastName': new FormControl('null', [Validators.required, Validators.email]),
    //   }),
    //   'age': new FormControl(Validators.required),
    //   'hobbies': new FormArray([])
    // });
    this.initForm();

  }

  initForm() {
    this.forms = this.fb.group({
      user: this.fb.group({
        firstName: ['first', [Validators.required, ForbidenControl()]],
        lastName: ['', [Validators.required, Validators.email]]
      }),
      age: ['', [Validators.required, rangeNumber()]],
      hobbies: this.fb.array([])
    });
  }

  submit() {
    const obj = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      age: this.age.value,
      hobbies: this.hobbies.value
    };
    console.log(this.hobbies);
    console.log(obj);
  }

  addHobby() {
    const control = new FormControl(null);
    (<FormArray>this.hobbies).push(control);
  }

}
