import { Action } from '@ngrx/store';
import { Cart } from '../definitions/Cart';

export const REMOVE_CART = `[CART] Remove`;
export const SAVE_CART = `[CART] Save`;
export const ADD_ORDER = `[CART] Add`;
export const UPDATE_ORDER = `[CART] Update`;

export const STORAGE_KEYS = {
  cart: `CART`
}

export class SaveCart implements Action {
    readonly type = SAVE_CART;

    constructor(public payload: Cart){}
}

export class AddOrder implements Action {
    readonly type = ADD_ORDER;
  
    constructor(public cart: Cart, public order){
    }
}

export class DeleteCart implements Action {
    readonly type = REMOVE_CART;
  
    constructor(){
    }
}

export class UpdateOrder implements Action {
    readonly type = UPDATE_ORDER;

    constructor(public newItem) {

    }
}



export type Actions = SaveCart | AddOrder | DeleteCart | UpdateOrder;