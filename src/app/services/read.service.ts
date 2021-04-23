import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Account } from '../definitions/Account';


@Injectable({
  providedIn: 'root'
})
export class ReadService {

  account: Observable<Account>;

  constructor(private store: Store<AppState>) {
    this.account = store.select('account');
  }

}
