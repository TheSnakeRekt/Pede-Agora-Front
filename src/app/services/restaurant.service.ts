import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../single-restaurant/single-restaurant.component';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  api = "http://localhost:3000";
  tags: Array<string>;

  constructor(private httpClient: HttpClient) { }
  getRestaurants(): Observable<any>{
   return this.httpClient.get(this.api+"/restaurantes");
  }
  
  setTags(tags){
    this.tags = tags;
  }

  getTags(): Array<string>{
    return this.tags;
  }

  getRecommendsItems(): Observable<any> {
    return this.httpClient.get(this.api+"/meals");
  }
}
