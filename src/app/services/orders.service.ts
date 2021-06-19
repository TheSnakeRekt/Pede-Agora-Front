import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Morada } from '../definitions/Account';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  api = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getAllOrders(): Observable<any>{
   return this.httpClient.get(this.api+"/orders");
  }

  getDeliveryPrice(rest, morada: Morada): Observable<any>{
    console.log(rest, morada)
    return this.httpClient.post(this.api+"/orders/getDistance", {restaurante: rest, morada:morada});
  }
}
