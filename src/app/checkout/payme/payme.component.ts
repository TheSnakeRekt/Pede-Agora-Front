import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var paypal;

@Component({
  selector: 'app-payme',
  templateUrl: './payme.component.html',
  styleUrls: ['./payme.component.scss']
})
export class PaymeComponent implements OnInit {

  @ViewChild('paypal',{static:true})
  paypalElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
    paypal.Buttons().render(this.paypalElement.nativeElement);
  }

}
