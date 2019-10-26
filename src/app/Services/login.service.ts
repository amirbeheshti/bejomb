import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { LoginInterface } from '../Interfaces/login-interface';

const STORAGE_KEY = 'local_todolist';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

    login_url= "http://localhost/bejonb/api/users/login/password";
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService , private http:HttpClient) {


   }

  login_post(post:LoginInterface){
    return this.http.post(this.login_url, post)
  }


}
