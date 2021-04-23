import { Action } from '@ngrx/store';
import { Account } from '../definitions/Account';

export const ADD_ACCOUNT = `[ACCOUNT] Add`;
export const REMOVE_ACCOUNT = `[ACCOUNT] Remove`;

export class AddAccount implements Action {

  readonly type = ADD_ACCOUNT;

  constructor(public payload: Account){

  }
}

export class RemoveAccount implements Action {
  readonly type = REMOVE_ACCOUNT;

  constructor(){
    
  }
}


export type Actions = AddAccount | RemoveAccount;