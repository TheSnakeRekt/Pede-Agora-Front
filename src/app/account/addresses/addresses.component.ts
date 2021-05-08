import { Component, Input, OnInit } from '@angular/core';
import { Account, Morada } from '../../definitions/Account';
import { ReadService } from '../../services/read.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {


  public conta:Account;
  fullComponent:boolean = true;

  constructor(private readService:ReadService) { }

  ngOnInit() {
    this.readService.getAccount().subscribe(data=>{
      this.conta = data.account;
    });
  }

}
