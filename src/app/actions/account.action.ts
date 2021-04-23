import { Action } from '@ngrx/store';
import { AccountToken } from '../definitions/Account';

export const ADD_ACCOUNT = `[ACCOUNT] Add`;
export const REMOVE_ACCOUNT = `[ACCOUNT] Remove`;

export const STORAGE_KEYS = {
  account: `ACCOUNT`,
  token: `TOKEN` 
}
export class AddAccount implements Action {

  readonly type = ADD_ACCOUNT;

  constructor(public payload: AccountToken){
    localStorage.setItem(STORAGE_KEYS.account,JSON.stringify(payload));
    localStorage.setItem(STORAGE_KEYS.token, payload.account.token);
  }
}

export class RemoveAccount implements Action {
  readonly type = REMOVE_ACCOUNT;

  constructor(){
    localStorage.setItem(STORAGE_KEYS.account,undefined);
  }
}


export type Actions = AddAccount | RemoveAccount;