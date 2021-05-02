import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  
  getRestaurant(id:number): Observable<any>{
    return this.httpClient.get(this.api+"/restaurantes/"+id);
  }

  getMeals(id:number): Observable<any> {
    return this.httpClient.get(this.api+"/restaurantes/"+id+"/meals/");
  }

  setTags(tags:Array<string>){
    this.tags = tags;
  }

  getTags(): Array<string>{
    return this.tags;
  }

  getRecommendsItems(): Observable<any> {
    return this.httpClient.get(this.api+"/meals");
  }
}
