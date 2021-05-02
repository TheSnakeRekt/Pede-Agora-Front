import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router, Event, ActivationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnDestroy {

  loader = Array(5);
  produtos:any = null;
  navSubscription: Subscription;

  constructor(private router:Router) { 
   this.navSubscription = this.router.events.subscribe((event:Event)=>{
     if(event instanceof NavigationStart || event instanceof ActivationEnd){
      this.produtos = this.router.getCurrentNavigation().extras.state;
       if(!this.produtos){
         this.produtos = JSON.parse(localStorage.getItem("Categoria"));
         console.log(this.produtos)
       }
      
     }
   })
  }

  ngOnDestroy(): void {
    this.navSubscription.unsubscribe();
  }
}


