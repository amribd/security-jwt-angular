import { AuthService } from './auth.service';
import { environment } from './../../../environments/environment';
import { IUser } from './../models/i-users';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public basePath = environment.url;
  public token;
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private jwtHelperService: JwtHelperService
  ) { 
    this.token = 'Bearer ' + sessionStorage.getItem('token');
  }

  public getAllUsers(): Observable<any> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: this.token
      })
    }; */
    console.log(this.jwtHelperService.isTokenExpired())

    return this.http.get<any>(this.basePath + '/user/users');
  }

  public saveUser(user): Observable<any> {
    return this.http.post<any>(this.basePath + '/user/user', user);
  }
}
