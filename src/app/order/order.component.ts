import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { LoginComponent } from "../login/login.component"
import { OrderService } from "../Services/order.service"
// import { OrderList } from "../Interfaces/order-list"

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor( /*private orderList: OrderList,*/ private localStorageService: OrderService, public snackBar: MatSnackBar, public login: LoginComponent) {
  }


  ngOnInit(): void {
    // let order: OrderList = { from: new Date("February 4, 2016 10:13:00") , to: new Date("February 4, 2016 10:13:00") };
    // order.from = this.username.nativeElement.value;
    // order.password = this.password.nativeElement.value;



    }
  }