import { Action } from '@ngrx/store';
import { AccountToken } from '../definitions/Account';

export const ADD_ACCOUNT = `[ACCOUNT] Add`;


export const STORAGE_KEYS = {
  account: `ACCOUNT`,
  token: `TOKEN` 
}
export class AddAccount implements Action {

  readonly type = ADD_ACCOUNT;

  constructor(public payload: AccountToken){
  }
}



export type Actions = AddAccount ;