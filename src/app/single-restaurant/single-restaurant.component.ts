import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RestaurantService } from '../services/restaurant.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Restaurant } from '../definitions/Restaurant';
import { ReadService } from '../services/read.service';

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
      if(this.categorias[0].grupos.length > 0){
        localStorage.setItem("Grupos", JSON.stringify(this.categorias[0].grupos));
      }
      
      localStorage.setItem("foto", this.categorias[0].foto);
      localStorage.setItem("Categoria", JSON.stringify(this.categorias[0].produtos));
      this.router.navigate([this.categorias[0].nome], {relativeTo: this.activatedRoute});
    });
  }
}