import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as AccountActions from '../actions/account.action';
import * as RestaurantActions from '../actions/restaurant.action';
import * as  CartActions  from '../actions/cart.actions';
import { AccountToken, Morada } from '../definitions/Account';
import { Restaurant } from '../definitions/Restaurant';
import { Cart } from '../definitions/Cart';

@Injectable({
  providedIn: 'root'
})
export class WriteService {

  constructor(private store: Store<AppState>) { }

  addAccount(account: AccountToken){
    this.store.dispatch(new AccountActions.AddAccount(account));
  }

  addAddress(address: Morada){
    this.store.dispatch(new AccountActions.AddAddress(address));
  }

  removeAddress(addresses: Morada[]){
    this.store.dispatch(new AccountActions.RemoveAddress(addresses));
  }

  selectRestaurant(restaurant: Restaurant){
    this.store.dispatch(new RestaurantActions.SelectRestaurant(restaurant))
  }

  saveCart(cart: Cart){
    this.store.dispatch( new CartActions.SaveCart(cart));
  }

  addItem(cart:Cart, item){
    this.store.dispatch( new CartActions.AddOrder(cart, item));
  }
  
  updateItem(newItem){
    this.store.dispatch( new CartActions.UpdateOrder(newItem));
  }
}
