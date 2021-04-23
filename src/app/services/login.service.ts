import { Injectable } from '@angular/core';
import { User } from '../interfaces/Ilogin';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account, AccountToken } from '../definitions/Account';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient:HttpClient) { }

  logIn(user):Observable<AccountToken> {
    let token = localStorage.getItem("TOKEN");
    console.log(user);
    
    return this.HttpClient.post<any>(`http://localhost:3000/login`, user, {headers:{'x-access-token': token ? token : ``}});
  }

  validateToken(token:string): Observable<Account>{
    return this.HttpClient.post<any>(`http://localhost:3000/login`, {}, {headers:{'x-access-token': token ? token : ``}});
  }

  signIn(userInfo): Observable<any>{
    return this.HttpClient.post<any>(`http://localhost:3000/signin`, userInfo);
  }
}
