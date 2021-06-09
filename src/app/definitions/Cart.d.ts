import { Restaurant } from "./Restaurant";

export interface Cart {
    tracker:string;
    orders:Array<any>;
    restaurante?:Restaurant;
}