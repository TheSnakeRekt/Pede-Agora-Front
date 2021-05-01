import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as AccountActions from '../actions/account.action';
import * as RestaurantActions from '../actions/restaurant.action';
import { AccountToken } from '../definitions/Account';
import { Restaurant } from '../definitions/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class WriteService {

  constructor(private store: Store<AppState>) { }

  addAccount(account: AccountToken){
    this.store.dispatch(new AccountActions.AddAccount(account));
  }

  selectRestaurant(restaurant: Restaurant){
    this.store.dispatch(new RestaurantActions.SelectRestaurant(restaurant))
  }

  removeAccount(){
    this.store.dispatch(new AccountActions.RemoveAccount());
  }
}
