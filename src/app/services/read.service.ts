import { Injectable } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { AccountToken } from '../definitions/Account';


@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private store: Store<AppState>) {}

  getAccount(){
    return this.store.select('account');
  }

  getSelectedRestaurant(){
    return this.store.select('selectedRestaurant');
  }

  extractToken(data: AccountToken){
    return data.account.token ? data.account.token : ``;
  }
}
