import { AccountToken, Account } from '../definitions/Account';
import * as AccountActions from '../actions/account.action';


const initialState:AccountToken = {
    access: false,
    account:{} as Account
}

export function reducerAccount(state: AccountToken = initialState, action: AccountActions.Actions) {
    switch(action.type){
        case AccountActions.ADD_ACCOUNT:
            localStorage.setItem("TOKEN", action.payload.account?.token);
            return action.payload;
        case AccountActions.ADD_ADDRESS:
            return {
                access:state.access,
                account:{
                    email: state.account.email,
                    nif:state.account.nif,
                    nome:state.account.nome,
                    telefone:state.account.telefone,
                    token:state.account.token,
                    moradas:[...state.account.moradas, action.address],
                }
            };
        case AccountActions.REMOVE_ADDRESS:
            return {
                access:state.access,
                account:{
                    email: state.account.email,
                    nif:state.account.nif,
                    nome:state.account.nome,
                    telefone:state.account.telefone,
                    token:state.account.token,
                    moradas:[...action.addresses],
                }
            };
        default:
            return state;
    }
}