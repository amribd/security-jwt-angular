import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public baseUrl = environment.url;
  public currentUrl: string;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private jwtHelperService: JwtHelperService
  ) {
    this.currentUrl = '/user';
   }

   static get token() {
     return sessionStorage.getItem('token');
   }

   static set token(value) {
     if(!value) {
       sessionStorage.removeItem('token');
     } else {
       sessionStorage.setItem('token', value);
     }
   }

   public login(credential) {
     let headers = new Headers();
      this.http.post(this.baseUrl + this.currentUrl + '/auth', {
        username: credential.username,
        password: credential.password
      })
              .subscribe(
              (token: any) => {
                sessionStorage.removeItem('counter');
                AuthService.token = token.token;
                this.router.navigate(['']);
                environment.token = token.tokens;
                this.isAuthenticated().subscribe(res => console.log('from isAuth' + res))
                this.toastr.success('you are connected');
              },
              (err) => {
                this.toastr.error('username or pasword are wrong');
              }
            );
   } 

  public returnToken() {
    return AuthService.token;
  }

  public isAuthenticated(): Observable<boolean> {
    return of(!this.jwtHelperService.isTokenExpired()).pipe(
      tap(allow => {
        if (allow) {
          this.toastr.success("isAuthenticated works");
        } else {
          this.toLogin();
        }
      })
    );
  }

  private toLogin(): Promise<boolean> {
    AuthService.token = null;
     return this.router.navigate(['auth/login']);
  }
}
