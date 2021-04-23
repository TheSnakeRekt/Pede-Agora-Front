import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as AccountActions from '../actions/account.action';
import { Account } from '../definitions/Account';

@Injectable({
  providedIn: 'root'
})
export class WriteService {

  constructor(private store: Store<AppState>) { }

  addAccount(account: Account){
    this.store.dispatch(new AccountActions.AddAccount(account));
  }

  removeAccount(){
    this.store.dispatch(new AccountActions.RemoveAccount());
  }
}
