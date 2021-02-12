import { AuthService } from './auth.service';
import { environment } from './../../../environments/environment';
import { IUser } from './../models/i-users';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public numberOfUsers: BehaviorSubject<any> = new BehaviorSubject('any');
  public basePath = environment.url;
  public token;
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private jwtHelperService: JwtHelperService
  ) { 
    this.token = 'Bearer ' + sessionStorage.getItem('token');
  }

  public saveUser(user): Observable<any> {
    return this.http.post<any>(this.basePath + '/api/v1/user', user);
  }

  public getAllUsers(): Observable<any> {
    return this.http.get<any>(this.basePath + "/api/v1/users");
  }
}
