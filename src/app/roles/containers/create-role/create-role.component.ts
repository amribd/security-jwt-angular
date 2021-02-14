import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RoleService } from './../../../shared/services/role.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styles: []
})
export class CreateRoleComponent implements OnInit {

  roleForm: FormGroup;
  constructor(
    private roleService: RoleService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.roleForm = this.fb.group({
      name: ['']
    });
  }

  get name() { return this.roleForm.get('name'); }

  onSubmit() {
    const role = {
      name: this.name.value
    }

    this.roleService.addRole(role).subscribe(
      (res) => {
        res.status ? ( this.toastr.success(res.message), this.router.navigate(['roles']) ): this.toastr.error(res.message);
       },
      (err) => this.toastr.error('error was occured', err)
    );

  }



}
