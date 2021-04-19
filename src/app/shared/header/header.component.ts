import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SheduledDeliverModelComponent } from '../sheduled-deliver-model/sheduled-deliver-model.component';
import { element } from 'protractor';
import { Router, ActivatedRoute, UrlSegment, NavigationEnd } from '@angular/router';
import { MdePopoverTrigger } from '@material-extended/mde';
import { User } from '../../interfaces/Ilogin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChildren(MdePopoverTrigger) trigger: QueryList<MdePopoverTrigger>;
  user: User;
  quantityList = [1,2,3,4,5,6,7,8,9,10];
  deliveryTimeSelection = [
    {
      'icon': 'access_time',
      'title': 'Entregar Já'
    },
    {
      'icon': 'calendar_today',
      'title': 'Planear pra mais tarde'
    }
  ];
  deliveryAddresses = new Array();
  searchableFoods = [
    {
      'icon': 'access_time',
      'title': 'North Indian'
    },
    {
      'icon': 'access_time',
      'title': 'Indian'
    },
    {
      'icon': 'access_time',
      'title': 'Biriyani'
    },
  ]

  cartItems = new Array();
  selectedDeliveryTime: any;
  selectedAddress: any;
  selectedSearchFood: any;

  deliveryDate: string;
  deliveryTime: string;
  currentRoute: string;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.currentRoute = this.router.url;
        }
      }
    );
  }

  ngOnInit() {
    this.selectedDeliveryTime = this.deliveryTimeSelection[0];
    this.selectedAddress = this.deliveryAddresses[0];
  }
  selectDefaultAddress(listOfAddresses) {
    listOfAddresses.forEach(element => {
      if (element.default) {
        this.selectedAddress = element;
      }
    });
  }

  inputAddressBoxEnable = false;
  addressButtonToggle() {
    this.inputAddressBoxEnable = !this.inputAddressBoxEnable;
  }
  searchInputBoxEnable = false;
  searchButtonToggle() {
    this.searchInputBoxEnable = !this.searchInputBoxEnable;
  }
  deliveryTimeSelectionChange() {
    if (this.selectedDeliveryTime.title == "Scheduler For Later") {
      this.openDialog();
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SheduledDeliverModelComponent, {
      width: '450px',
      data: { deliveryDate: this.deliveryDate, deliveryTime: this.deliveryTime }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deliveryDate = result.deliveryDate;
        this.deliveryTime = result.deliveryTime;
        this.selectedDeliveryTime.data = result.deliveryDate + ' ' + result.deliveryTime;
      } else {
        this.selectedDeliveryTime = this.deliveryTimeSelection[0];
      }
    });
  }

  deliveryAddressChange(event) {
    console.log(event);
  }
  calculateTotalPriceOfCart () : number{
    let total = 0;
    this.cartItems.forEach(element => {
      total = total + (element.price * element.quantity);
    });
    return total;
  }
  logout() {
    this.user = null;
    this.router.navigate(['home']);
  }
  addToCart(item) {
  }
  closeCartPopover() {
    this.trigger.toArray()[0].togglePopover();
  }
}


export interface ScheduleTime {
  deliveryDate: string;
  deliveryTime: string;
}