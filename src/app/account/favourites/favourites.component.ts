import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  loader = new Array(2);
  restaurants = new Array();
  loaderRestaurant = new Array(8);
  constructor(private router: Router, private restaurantService: RestaurantService) {}
  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(res=>{
      this.restaurants = res;
    });
  }

}
