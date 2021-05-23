import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Account, Morada } from '../../definitions/Account';
import { ReadService } from '../../services/read.service';
import { NewAddressComponent } from './new-address/new-address.component';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { WriteService } from '../../services/write.service';
import { ProfileService } from '../../services/profile.service';
@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  
  public conta:Account;
  fullComponent:boolean = true;

  constructor(private readService:ReadService, private matDialog: MatDialog, private writeService: WriteService, private profileService: ProfileService) { }

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

  removeAddress(morada:Morada){
    if(this.conta.moradas.length <= 1){
      Swal.fire('Gerir Moradas', 'É necessário pelo menos uma morada!', 'error');
      return;
    }
    
    this.profileService.removeAddresse(morada, this.conta.token).subscribe(data=>{
      if(data){
        this.writeService.removeAddress(this.conta.moradas.filter(elem => elem.name != morada.name));
      }
    });
  }
}
