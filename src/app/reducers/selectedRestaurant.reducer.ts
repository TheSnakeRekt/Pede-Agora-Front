import * as RestaurantActions from '../actions/restaurant.action';
import { Restaurant } from '../definitions/Restaurant';


const initialState:Restaurant = {} as Restaurant;

export function reducerSelectedRestaurant(state: Restaurant = initialState, action: RestaurantActions.Actions) {
    switch(action.type){
        case RestaurantActions.SELECT_RESTAURANT:
            return action.payload;
        default:
            return state;
    }
}