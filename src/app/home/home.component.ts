import { Component, OnDestroy, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';
import { Restaurant } from '../definitions/Restaurant';
import { WriteService } from '../services/write.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  restaurantes:Restaurant[] = new Array();
  loaderRestaurant = new Array(3);
  tags = new Array();
  filterSub: Subscription;

  constructor(private restaurantService: RestaurantService, private router: Router, private writeService: WriteService) { }
 

  ngOnInit() {
    this.loadRestaurantes();

    this.filterSub = this.restaurantService.onFilteredRestaurants().subscribe(res=>{
      
       let filtered = [];

       res.filter?.forEach(val=>{
          filtered = this.restaurantes.filter(rest=>{
            
            return rest.tags.filter(tag=>{
              if(tag.toLowerCase().trim() == val.toLowerCase().trim()){
                return rest;
              }
            })
          });
        })
       
        if(!filtered.length){
          this.loadRestaurantes()
        }

        this.loadRestaurantesFiltered(filtered, res.filter);
    });

  
  }

  goToRestaurant(id:number){
    this.writeService.selectRestaurant(this.restaurantes.find(restaurant => restaurant.id === id));
    this.router.navigate(['restaurants/',id]);
  }

  hasTag(restaurante: any, tag: string): boolean{
    for(let i = 0; i < restaurante.tags.length; i++){
      if(restaurante.tags[i].trim() == tag){
        return true
      }
    }

    return false;
  }

  ngOnDestroy(): void {
    this.filterSub.unsubscribe();
  }


  private loadRestaurantes(){
    this.restaurantService.getRestaurants().subscribe(res=>{
      this.restaurantes = res.reverse();
      this.tags = [...new Set([].concat(...this.restaurantes.map((rest)=>{
        return rest.tags.map(tag=>{
          return tag.trim();
        })
      })))];
      this.restaurantService.setTags(this.tags);
    });
  }

  
  private loadRestaurantesFiltered(rests, filter){
    this.tags = filter;
    this.restaurantes = rests;
  }
}
