import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  forms: FormGroup;
  constructor() { }

  get firstName() { return this.forms.get('user.firstName'); }
  get lastName() { return this.forms.get('user.lastName'); }
  get age() { return this.forms.get('age'); }
  get hobbies() { return this.forms.get('hobbies'); }

  ngOnInit() {
    this.forms = new FormGroup({
      'user': new FormGroup({
        'firstName': new FormControl('null', [Validators.required]),
        'lastName': new FormControl('null', [Validators.required, Validators.email]),
      }),
      'age': new FormControl(Validators.required),
      'hobbies': new FormArray([])
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
