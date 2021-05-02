import { Component, OnInit, ViewChild } from '@angular/core';
import { AddItemModelComponent } from './add-item-model/add-item-model.component';
import { MatDialog } from '@angular/material';
import { RestaurantService } from '../services/restaurant.service';
import { CartService } from '../services/cart.service';
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { Restaurant } from '../definitions/Restaurant';
import { ReadService } from '../services/read.service';
import { MealComponent } from './meal/meal.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-single-restaurant',
  templateUrl: './single-restaurant.component.html',
  styleUrls: ['./single-restaurant.component.scss']
})
export class SingleRestaurantComponent implements OnInit {

  categorias: any;
  cart = Array();
  loader = Array(8);
  restaurant:Restaurant;
  background:string;
  morada:string;
  restId:number;

  constructor(
    public dialog: MatDialog,
    private restaurantService: RestaurantService,
    private readService: ReadService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(val=>{
      this.restId = val.id;
    });
  }

  ngOnInit() {
    this.readService.getSelectedRestaurant().subscribe(data=>{
      this.restaurant = data;

      if(Object.keys(data).length === 0){
        this.restaurantService.getRestaurant(this.restId).subscribe(restaurant=>{
          this.restaurant = restaurant;
          this.morada =`${this.restaurant.morada.rua}`; 
          this.background = `background:url(${this.restaurant.cdn}${this.restaurant.desktop_widget});   
          background-size: 100%;
          background-repeat: no-repeat;`;
        });
      }else{
        this.morada =`${this.restaurant.morada.rua}`; 
        this.background = `background:url(${this.restaurant.cdn}${this.restaurant.desktop_widget});   
        background-size: 100%;
        background-repeat: no-repeat;`;
      }
    });

    this.restaurantService.getMeals(this.restId).subscribe(data=>{
      this.categorias = data;
      localStorage.setItem("Categoria", JSON.stringify(this.categorias[0].produtos));
      this.router.navigate([this.categorias[0].nome], {relativeTo: this.activatedRoute});
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