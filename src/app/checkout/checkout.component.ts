import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReadService } from '../services/read.service';
import { Account } from '../definitions/Account';
import { Cart } from '../definitions/Cart';
import { WriteService } from '../services/write.service';
import { MatDialog } from '@angular/material';
import { PaymeComponent } from './payme/payme.component';
import { OrdersService } from '../services/orders.service';
import { Subscription } from 'rxjs';
import { Restaurant } from '../definitions/Restaurant';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  quantityList = [1,2,3,4,5,6,7,8,9,10];
  conta: Account = null;
  cart: Cart;
  subs: Subscription[] = [];
  selectedRestaurant: Restaurant;
  entrega: number = 0;

  constructor(private router: Router, 
    private writeService: WriteService,
    private readService: ReadService,
    private matDialog:MatDialog,
    private orderService: OrdersService) {
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub=>sub.unsubscribe);
  }

  ngOnInit() {


    let sub1 = this.readService.getCart().subscribe(data=>{
      this.cart = data;

      let sub2 = this.readService.getAccount().subscribe(data=>{
        if(data.access){
          this.conta = data.account;

          let sub3 = this.readService.getSelectedRestaurant().subscribe(restaurant=>{
            this.selectedRestaurant = restaurant;
            this.getDeliveryPrice(restaurant);
          });

          this.subs.push(sub3);
        }
      });

      this.subs.push(sub2);
    });

    this.subs.push(sub1);
  }

  addToCart(event, item): void {
    let newItem = Object.assign({}, item);
    newItem.quantidade = event.value;
    this.writeService.updateItem(newItem);
  }

  addFee(item): void {
    console.log(item);
    
    let km1 = this.selectedRestaurant.zonas[0] / 1000;
    let km2 = this.selectedRestaurant.zonas[1] / 1000;
    let km3 = this.selectedRestaurant.zonas[2] / 1000;

    console.log(km1,km2,km3);

    if(km3 < item){
      this.entrega = 3;
    }else if(item < km1){
      this.entrega = 2;
    } else{
      this.entrega = 1.5;
    }
  }

  removeFromCart(item){
    let newItem = Object.assign({}, item);
    newItem.quantidade = 0;
    this.writeService.updateItem(newItem);
  }

  calculateTotalPriceOfCart () : number{
    let total = 0;
    
    this.cart.orders.forEach(element => {
      if(element.extras && element.extras.length > 1){
        total += (element.preco + element.extras[1] * element.quantidade);
      }else{
        total += element.preco;
      }
      
      if(element.extras && element.extras[3].length > 0){
        element.extras[3].forEach(extra=>{
          total += extra.preco;
        });
      }
    });
    
    return total + this.entrega;
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

  paypalPayment(){
    this.matDialog.open(PaymeComponent, {
      width: '400px',
      height: '350px'
    })
  }

  private getDeliveryPrice(restaurant: any){
    if(this.conta && this.conta.selectedMorada){
      let sub = this.orderService.getDeliveryPrice(restaurant.morada, this.conta.selectedMorada).subscribe(data=>{
        this.addFee(data);
      });
      this.subs.push(sub);
    }
    
  }
}
