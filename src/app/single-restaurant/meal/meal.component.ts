import { Component, OnDestroy } from '@angular/core';
import { AddItemModelComponent } from '../add-item-model/add-item-model.component';
import { MatDialog } from '@angular/material';
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
  catfoto:string;
  grupos: Array<any>;

  constructor(private router:Router, public dialog: MatDialog) { 
   this.navSubscription = this.router.events.subscribe((event:Event)=>{
     if(event instanceof NavigationStart || event instanceof ActivationEnd){
      this.produtos = this.router.getCurrentNavigation().extras.state ? this.router.getCurrentNavigation().extras.state[0] : undefined;
      this.catfoto = this.router.getCurrentNavigation().extras.state? this.router.getCurrentNavigation().extras.state[1] : undefined;
      this.grupos = this.router.getCurrentNavigation().extras.state? this.router.getCurrentNavigation().extras.state[2] : undefined;

       if(!this.produtos){
         this.produtos = JSON.parse(localStorage.getItem("Categoria"));
         this.catfoto = localStorage.getItem("foto");
         this.grupos = JSON.parse(localStorage.getItem('Grupos'));
       }
      
     }
   })
  }

  getFoto(){
    return this.catfoto;
  }

  ngOnDestroy(): void {
    this.navSubscription.unsubscribe();
  }

  addItemDialog(meal): void {

    const dialogRef = this.dialog.open(AddItemModelComponent, {
      width: '1000px',
      data: [meal, this.grupos]
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
