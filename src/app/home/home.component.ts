import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';
import { Restaurant } from '../definitions/Restaurant';
import { WriteService } from '../services/write.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurantes:Restaurant[] = new Array();
  loaderRestaurant = new Array(3);
  tags = new Array();
  constructor(private restaurantService: RestaurantService, private router: Router, private writeService: WriteService) { }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(res=>{
      this.restaurantes = res.reverse();
      this.tags = [...new Set([].concat(...this.restaurantes.map((rest)=>{
        return rest.tags.map(tag=>{
          return tag.trim()
        })
      })))];
      this.restaurantService.setTags(this.tags);
    });
    console.log(this.restaurantes[0])
  }

  goToRestaurant(id:number){
    this.writeService.selectRestaurant(this.restaurantes.find(restaurant => restaurant.id === id));
    this.router.navigate(['restaurants/'+id]);
  }

  hasTag(restaurante: any, tag: string): boolean{
    for(let i = 0; i < restaurante.tags.length; i++){
      if(restaurante.tags[i].trim() == tag){
        return true
      }
    }
    return false;
  }
}
