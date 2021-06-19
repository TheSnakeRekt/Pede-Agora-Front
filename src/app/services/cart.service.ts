import { Injectable } from '@angular/core';
import { ReadService } from './read.service';
import { Cart } from '../definitions/Cart';
import { WriteService } from './write.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cart: Cart;
  constructor(private readService: ReadService, private writeService: WriteService) { 
    this.getCart();
  }
 

  getCart() {
    this.readService.getCart().subscribe(data=>{
      this.cart = data;
    });
  }

  setTracker(tracker:string){
    this.cart.tracker = tracker;
  }

  addToCart(item) {
   this.writeService.addItem(this.cart, item);
  }
  
}
