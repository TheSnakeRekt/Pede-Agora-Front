import * as  CartActions  from '../actions/cart.actions';
import { Cart } from '../definitions/Cart';

const initialState: Cart = {
    tracker : '',
    orders : new Array(),
    
}

export function reducerCart(state: Cart = initialState, action: CartActions.Actions) {
    switch(action.type){
        case CartActions.SAVE_CART:
            return action.payload;
        case CartActions.ADD_ORDER:
            return {
                tracker: action.cart.tracker,
                orders: [...state.orders, action.order]
            }
        case CartActions.UPDATE_ORDER:
            return {
                tracker: state.tracker,
                orders: [...replaceItem(state.orders,action.newItem)]
            }      
        default:
            return state;
    }
}

const replaceItem = (orders:Array<any>, newItem) =>{
    const arr = [...orders];
    arr.splice(orders.findIndex(item=>item.id == newItem.id), 1);
    
    if(newItem.quantidade < 1){
        return [...arr];
    }

    arr.push(newItem);
    return [...arr];
}