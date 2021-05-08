import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ReadService } from '../services/read.service';
import { Account } from '../definitions/Account';
import { Cart } from '../definitions/Cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  quantityList = [1,2,3,4,5,6,7,8,9,10];
  conta: Account = null;
  cart: Cart;
  constructor(private router: Router, 
    private cartService: CartService,
    private readService: ReadService) {


  }

  ngOnInit() {
    this.readService.getAccount().subscribe(data=>{
      if(data.access){
        this.conta = data.account;
      }
    });
    this.readService.getCart().subscribe(data=>{
      this.cart = data;
    })
  }

  calculateTotalPriceOfCart () : number{
    let total = 0;
    this.cart.orders.forEach(element => {
      total = total + (element.preco * element.quantidade);
    });
    return Number.parseFloat(total.toFixed(2));
  }

  addToCart(item) {
    this.cartService.addToCart(item);
  }

  openLoginSideNav(){
   // this.helperService.loginSideNav.next(true);
  }

}
