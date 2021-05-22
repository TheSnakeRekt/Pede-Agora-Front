import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Account } from '../../definitions/Account';
import { ReadService } from '../../services/read.service';
import { NewAddressComponent } from './new-address/new-address.component';
@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  
  public conta:Account;
  fullComponent:boolean = true;

  constructor(private readService:ReadService, private matDialog: MatDialog) { }

  ngOnInit() {
    this.readService.getAccount().subscribe(data=>{
      this.conta = data.account;
    });
  }

  createNewAddress(){
    const dialogRef = this.matDialog.open(NewAddressComponent, {
      width: '700px'
    });
  }
}
