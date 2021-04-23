import { Injectable } from '@angular/core';
import { User } from '../interfaces/Ilogin';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReadService } from './read.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;
  constructor(private HttpClient:HttpClient, private storage:ReadService) { }

  logIn(user):Observable<any> {
    let token;
    this.storage.account.subscribe(data=>{
      token = data.token
    });
    
    return this.HttpClient.post<any>(`http://localhost:3000/login`, user, {headers:new HttpHeaders({'x-access-token':token})});
  }

  signIn(userInfo): Observable<any>{
    return this.HttpClient.post<any>(`http://localhost:3000/signin`, userInfo);
  }
}
