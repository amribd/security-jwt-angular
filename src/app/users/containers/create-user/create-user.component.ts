import { ToastrService } from 'ngx-toastr';
import { UsersService } from './../../../shared/services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public userForm: FormGroup;
  constructor(
          private fb: FormBuilder,
          private usersService: UsersService,
          private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public get firstName() { return this.userForm.get('firstName'); }
  public get lastName() { return this.userForm.get('lastName'); }
  public get userName() { return this.userForm.get('userName'); }
  public get role() { return this.userForm.get('role'); }
  public get password() { return this.userForm.get('password'); }
  public get confirmationPassword() { return this.userForm.get('confirmationPassword'); }

  initForm() {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      userName: [''],
      role: [''],
      password: [''],
      confirmationPassword: ['']
    });
  }

  onSubmit() {
    const obj = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      userName: this.userName.value,
      role: this.role.value,
      password: this.password.value,
    };
      this.usersService.saveUser(obj).subscribe(
        (res) => {
        this.toastr.success(res.message, res.status)
      },
      (err) => {
        console.log(err);
        this.toastr.error(err.error.error, err.error.message);
      }
      );
  }

}
