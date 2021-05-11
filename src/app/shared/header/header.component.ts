import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialog, MatSelectChange } from '@angular/material';
import { SheduledDeliverModelComponent } from '../sheduled-deliver-model/sheduled-deliver-model.component';
import { element } from 'protractor';
import { Router, ActivatedRoute, UrlSegment, NavigationEnd } from '@angular/router';
import { MdePopoverTrigger } from '@material-extended/mde';
import { User } from '../../interfaces/Ilogin';
import { RestaurantService } from '../../services/restaurant.service';
import { LoginService } from '../../services/login.service';
import { Console } from 'node:console';
import { WriteService } from '../../services/write.service';
import { ReadService } from '../../services/read.service';
import { Account } from '../../definitions/Account';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChildren(MdePopoverTrigger) trigger: QueryList<MdePopoverTrigger>;
  user: Account;
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
  searchableFoods;

  cartItems = new Array();
  selectedDeliveryTime: any;
  selectedAddress: any;
  selectedSearchFood: any;

  firstName: string;
  deliveryDate: string;
  deliveryTime: string;
  currentRoute: string;
  loggedIn: boolean;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private loginService: LoginService,
    private writeService: WriteService,
    private readService: ReadService,
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
    this.loadToken();
    this.selectedDeliveryTime = this.deliveryTimeSelection[0];
    this.selectedAddress = this.deliveryAddresses[0];
    this.readService.getCart().subscribe(data=>{
      this.cartItems = data.orders;
    })
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
    this.searchableFoods = this.restaurantService.getTags().slice(0,5);
    this.searchInputBoxEnable = !this.searchInputBoxEnable;
  }

  deliveryTimeSelectionChange(event) {
    if (this.selectedDeliveryTime.title == "Scheduler For Later") {
      this.openDialog();
    }
  }

  enableClosePopover;
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

  calcularItem(item):number{
    let total = (item.preco + item.extras[1]) * item.quantidade;

    if(item.extras[3].length > 0){
      item.extras[3].forEach(extra=>{
        total += extra.preco;
      });
    }

    return total;
  }

  calculateTotalPriceOfCart () : number{
    let total = 0;
    
    this.cartItems.forEach(element => {
      total += (element.preco + element.extras[1] * element.quantidade);
      if(element.extras[3].length > 0){
        element.extras[3].forEach(extra=>{
          total += extra.preco;
        });
      }
    });
    
    return total;
  }

  logout() {
    this.user = null;
    this.router.navigate(['home']);
  }

  addToCart(event: MatSelectChange, item): void {
    let newItem = Object.assign({}, item);
    newItem.quantidade = event.value;
    this.writeService.updateItem(newItem);
  }

  removeFromCart(item){
    let newItem = Object.assign({},item);
    newItem.quantidade = 0;
    this.writeService.updateItem(newItem);
  }

  closeCartPopover() {
    this.trigger.toArray()[0].togglePopover();
  }

  private loadToken(){
    this.readService.getAccount().subscribe(data=>{
      if(data){
        let token: string = this.readService.extractToken(data);
        if(token){
          this.loginService.validateToken(token).subscribe(data=>{
            if(!data  || data.error){
              this.router.navigate(['/login']);
            }
            data.account.token = token;
            this.user = data.account;
            this.loggedIn = true;
            this.firstName = this.user.nome.split(' ')[0].trim();
          });
        }
      }
    });
  }
  
}


export interface ScheduleTime {
  deliveryDate: string;
  deliveryTime: string;
}