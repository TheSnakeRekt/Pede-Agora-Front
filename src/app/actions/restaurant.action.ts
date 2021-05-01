import { Action } from '@ngrx/store';
import { Restaurant } from '../definitions/Restaurant';

export const SELECT_RESTAURANT = `[RESTAURANT] Select`;

export const STORAGE_KEYS = {
  selectedRestaurant: `SELECTED_RESTAURANT`
}

export class SelectRestaurant implements Action {
    readonly type = SELECT_RESTAURANT;

    constructor(public payload: Restaurant){}
}
 
export type Actions = SelectRestaurant;