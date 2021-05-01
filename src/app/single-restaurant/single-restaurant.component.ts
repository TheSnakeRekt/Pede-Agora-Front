import { Component, OnInit } from '@angular/core';
import { AddItemModelComponent } from './add-item-model/add-item-model.component';
import { MatDialog } from '@angular/material';
import { RestaurantService } from '../services/restaurant.service';
import { CartService } from '../services/cart.service';
import { Restaurant } from '../definitions/Restaurant';
import { ReadService } from '../services/read.service';

@Component({
  selector: 'app-single-restaurant',
  templateUrl: './single-restaurant.component.html',
  styleUrls: ['./single-restaurant.component.scss']
})
export class SingleRestaurantComponent implements OnInit {

  meals: any;
  cart = Array();
  loader = Array(8);
  restaurant:Restaurant;
  background:string;
  morada:string;

  constructor(
    public dialog: MatDialog,
    private restaurantService: RestaurantService,
    private readService: ReadService,
  ) { 
  }

  ngOnInit() {
    this.readService.getSelectedRestaurant().subscribe(data=>{
      this.restaurant = data;
      this.morada =`${this.restaurant.morada.rua}`; 
      this.background = `background:url(${this.restaurant.cdn}${this.restaurant.desktop_widget});   
      background-size: 100%;
      background-repeat: no-repeat;`
      console.log(this.background)
    })
  }
  
  enableMeal() {
    this.cart.forEach(cartItem => {
      this.meals.forEach(meal => {
        meal.mealList.forEach(item => {
          if (cartItem.id === item.id) {
            item.quantity = cartItem.quantity;
          }
        });
      });
    });
  }

  addItemDialog(meal): void {
    const dialogRef = this.dialog.open(AddItemModelComponent, {
      width: '650px',
      data: meal
    });
    dialogRef.afterClosed().subscribe(result => {
      // if (result) {
      //   this.deliveryDate = result.deliveryDate;
      //   this.deliveryTime = result.deliveryTime;
      //   this.selectedDeliveryTime.data = result.deliveryDate + ' ' + result.deliveryTime;
      // } else {
      //   this.selectedDeliveryTime = this.deliveryTimeSelection[0];
      // }
    });
  }
}

export interface Meal {
  id: number;
  name: string;
  type: string;
  price: number;
  containt: string;
  quantity: number;
}