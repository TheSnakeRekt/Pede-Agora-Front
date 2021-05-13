import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ReadService } from '../services/read.service';
import { Account } from '../definitions/Account';
import { Cart } from '../definitions/Cart';
import { WriteService } from '../services/write.service';

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
    private writeService: WriteService,
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

  addToCart(event, item): void {
    let newItem = Object.assign({}, item);
    newItem.quantidade = event.value;
    this.writeService.updateItem(newItem);
  }

  removeFromCart(item){
    let newItem = Object.assign({},item);
    newItem.quantidade = 0;
    this.writeService.updateItem(newItem);
  }

  calculateTotalPriceOfCart () : number{
    let total = 0;
    
    this.cart.orders.forEach(element => {
      total += (element.preco + element.extras[1] * element.quantidade);
      if(element.extras[3].length > 0){
        element.extras[3].forEach(extra=>{
          total += extra.preco;
        });
      }
    });
    
    return total;
  }

  
  calcularItem(item):number{
    let total = (item.preco + item.extras[1]) * item.quantidade;

    if(item.extras[3].length > 0){
      item.extras[3].forEach(extra=>{
        total += extra.preco;
      });
    }

    return total;
  }

  openLoginSideNav(){
   // this.helperService.loginSideNav.next(true);
  }

}
