import { AccountToken } from "./definitions/Account";
import { Restaurant } from "./definitions/Restaurant";

export interface AppState {
    readonly account: AccountToken;
    readonly selectedRestaurant: Restaurant;
}