import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInterface } from '../Interfaces/login-interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login_url="http://23bejonb.com/api/users/login/password";

  constructor(private http:HttpClient) { }

  login_post(post:LoginInterface){
    return this.http.post(this.login_url, post)
  }
}
