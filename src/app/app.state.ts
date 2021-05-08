import { AccountToken } from "./definitions/Account";
import { Cart } from "./definitions/Cart";
import { Restaurant } from "./definitions/Restaurant";

export interface AppState {
    readonly account: AccountToken;
    readonly selectedRestaurant: Restaurant;
    readonly cart: Cart;
}