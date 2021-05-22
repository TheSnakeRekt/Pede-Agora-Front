import { Action } from '@ngrx/store';
import { AccountToken } from '../definitions/Account';

export const ADD_ACCOUNT = `[ACCOUNT] Add`;
export const ADD_ADDRESS = `[ACCOUNT/ADDRESS] Add`;

export const STORAGE_KEYS = {
  account: `ACCOUNT`,
  token: `TOKEN` 
}
export class AddAccount implements Action {

  readonly type = ADD_ACCOUNT;

  constructor(public payload: AccountToken){
  }
}

export class AddAddress implements Action {

  readonly type = ADD_ADDRESS;

  constructor(public address: any){
  }
}


export type Actions = AddAccount | AddAddress ;