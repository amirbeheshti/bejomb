import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { OrderList } from '../Interfaces/order-list';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderListURL = "http://localhost/bejonb/api/managers/shop/orders/:market/list";
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private http: HttpClient) { }
  orderList(post: OrderList) {
    return this.http.post(this.orderListURL, post)
  }


}
