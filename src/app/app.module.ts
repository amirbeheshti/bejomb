import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatSnackBarModule} from '@angular/material';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatButtonModule,MatSnackBarModule,
    DpDatePickerModule 


  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
