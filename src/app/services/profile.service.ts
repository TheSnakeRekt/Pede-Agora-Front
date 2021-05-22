import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  api = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  addAddresse(address:any, token:string): Observable<any>{
    return this.httpClient.post(this.api+"/address", address, {headers:{'x-access-token': token ? token : ``}});
  }
}
