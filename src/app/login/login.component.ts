import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Input } from '@angular/compiler/src/core';
import { LoginInterface } from '../Interfaces/login-interface'
import { post } from 'selenium-webdriver/http';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('username', { static: false }) username;
  @ViewChild('password', { static: false }) password;

  constructor(private login_service: LoginService) {

  }

  ngOnInit() {

  }
  login_btn() {
    let login: LoginInterface = { mobile: 0,password: 0 };
    login.mobile=this.username.nativeElement.value;
    login.password=this.password.nativeElement.value;

    this.login_service.login_post(login).subscribe(
      Response => console.log(Response)
      
    );
  }
}




