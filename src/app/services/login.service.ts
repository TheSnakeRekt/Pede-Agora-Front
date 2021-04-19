import { Injectable } from '@angular/core';
import { User } from '../interfaces/Ilogin';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;
  constructor(private HttpClient:HttpClient) { }

  logIn(user):Observable<any> {
    return this.HttpClient.post<any>(`http://localhost:3000/login`, user);
  }
}
