import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurantes = new Array();
  loaderRestaurant = new Array(3);
  tags = new Array();
  constructor(private resturantService: RestaurantService, private router: Router) { }

  ngOnInit() {
    this.resturantService.getRestaurants().subscribe(res=>{
      this.restaurantes = res.reverse();
      this.tags = [...new Set([].concat(...this.restaurantes.map((rest)=>{
        return rest.tags.map(tag=>{
          return tag.trim()
        })
      })))];
      this.resturantService.setTags(this.tags);
    });
    
  }

  goToRestaurant(id){
    this.router.navigate(['restaurants/1'+id]);
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
