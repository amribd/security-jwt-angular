import { AuthService } from './../../../shared/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public get username() { return this.loginForm.get('username'); }
  public get password() { return this.loginForm.get('password'); }
  initForm() {
    this.loginForm = this.fb.group({
      username: ['user'],
      password: ['password']
    });
  }

  onSubmit() {
    const obj = {
      username: this.username.value,
      password: this.password.value
    };
    this.authService.login(obj);
  }

}
