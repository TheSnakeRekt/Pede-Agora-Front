import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  api = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  getAllOrders(): Observable<any>{
   return this.httpClient.get(this.api+"/orders");
  }
}
