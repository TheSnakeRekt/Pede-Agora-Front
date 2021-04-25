import { AccountToken, Account } from '../definitions/Account';
import * as AccountActions from '../actions/account.action';


const initialState:AccountToken = {
    access: false,
    account:{} as Account
}

export function reducer(state: AccountToken = initialState, action: AccountActions.Actions) {
    switch(action.type){
        case AccountActions.ADD_ACCOUNT:
            return action.payload;
        default:
            return AccountActions.GetAccount.load();
    }
}