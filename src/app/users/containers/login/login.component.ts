import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public obs$: Observable<boolean>;
  constructor() { }

  ngOnInit() {
  }

  create() {
     this.obs$ = of(false);
  }

  subscribe() {
    this.obs$.pipe(
      tap(res => {
        if(res) {
          console.log("res is true");
        } else
          console.log("res is false")
      })
    ).subscribe();
  }

  

}
