import { UsersService } from './../../../shared/services/users.service';
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
  public count;
  constructor(
              private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getCountUsers();
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

  getCountUsers() {
    this.usersService.countUsers().subscribe(
      (count) => {
        console.log(count);
        this.usersService.numberOfUsers.next(count);
        this.count = count;
      },
      (err) => console.log(err)
    );
  }


  /* const obs = this.progressWebsocketService.getObservable();
obs.subscribe({
  next: this.onNewProgressMsg,
  error: (err) => { console.log(err); }
}); */

  

}
