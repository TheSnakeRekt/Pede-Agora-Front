import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Morada } from '../definitions/Account';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  api = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  addAddresse(address:Morada, token:string): Observable<any>{
    return this.httpClient.post(this.api+"/address", address, {headers:{'x-access-token': token ? token : ``}});
  }

  removeAddresse(address:Morada, token:string): Observable<any>{
    return this.httpClient.delete(this.api+"/address", {headers:{'x-access-token': token ? token : ``}, params:{address:address.name}});
  }

  changePassword(oldPassword:string, newPassword:string, token:string): Observable<any>{
    return this.httpClient.post(this.api+"/psw", {oldPassword:oldPassword, newPassword:newPassword}, {headers:{'x-access-token': token ? token : ``}});
  }

  validateAccount(code:string, token:string): Observable<any>{
    return this.httpClient.post(this.api+"/validateNumber", {code}, {headers:{'x-access-token': token ? token : ``}})
  }

  requestCode(token:string): Observable<any>{
    return this.httpClient.post(this.api+"/phoneverify", {}, {headers:{'x-access-token': token ? token : ``}})
  }
}
