import { Action } from '@ngrx/store';
import { AccountToken, Morada } from '../definitions/Account';

export const ADD_ACCOUNT = `[ACCOUNT] Add`;
export const ADD_ADDRESS = `[ACCOUNT/ADDRESS] Add`;
export const REMOVE_ADDRESS = `[ACCOUNT/ADDRESS] Remove`;
export const SELECT_ADDRESS = `[ACCOUNT/ADDRESS] Set`

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

  constructor(public address: Morada){
  }
}

export class RemoveAddress implements Action {

  readonly type = REMOVE_ADDRESS;

  constructor(public addresses: Morada[]){
  }
}

export class SelectAddress implements Action {

  readonly type = SELECT_ADDRESS;

  constructor(public address: Morada){
  }
}

export type Actions = AddAccount | AddAddress | RemoveAddress | SelectAddress;