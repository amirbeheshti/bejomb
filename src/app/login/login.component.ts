import {Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
// import {Input} from '@angular/compiler/src/core';
import {LoginInterface} from '../Interfaces/login-interface';
import {LoginService} from '../Services/login.service';
import {post} from 'selenium-webdriver/http';

import {MatSnackBar} from "@angular/material";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  get Login_response(): any {
    return this._Login_response = JSON.parse(localStorage["API_respoonse"]);
  }
  private _Login_response: any;


  ngOnInit(): void {
    console.log(this.Login_response)
  }


  @ViewChild('username', {static: false}) username;
  @ViewChild('password', {static: false}) password;

  constructor(private login_service: LoginService, private localStorageService: LoginService, public snackBar: MatSnackBar) {

  }


  login_btn() {
    let login: LoginInterface = {mobile: "0", password: "0"};
    login.mobile = this.username.nativeElement.value;
    login.password = this.password.nativeElement.value;

    this.login_service.login_post(login).subscribe(
      Response => {
        let key = 'API_respoonse';
        localStorage.setItem(key, 'Response');
        let myObj = {Response};
        localStorage.setItem(key, JSON.stringify(myObj));
        // Read item:
        let item = JSON.parse(localStorage.getItem(key));
        console.log(item);
        this.openSnackBar(Response["user_message"], "close");
        // console.log(login_response)
      }
    );


  }

  //toasts

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    })
  }


}






