import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../../services/profile.service';
import { ReadService } from '../../../services/read.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { WriteService } from '../../../services/write.service';
import { Observable, Subscription } from 'rxjs';
import { Account, AccountToken } from '../../../definitions/Account';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.scss']
})
export class NewAddressComponent implements OnInit {

  newAddressForm: FormGroup;
  ref: Subscription;
  account: Account
  constructor(private profileService:ProfileService, private readService:ReadService, private writeService:WriteService) { 
    this.readService.getAccount().subscribe(data=>{
      this.account = data.account;
    })
  }

  ngOnInit(): void {
    this.newAddressForm = new FormGroup({
      type: new FormControl('', Validators.required),
      rua: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      codigoPostal: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required)
    });
  }

  addAddress(){
      this.ref = this.profileService.addAddresse(this.newAddressForm.value, this.account.token).subscribe(resp =>{
        if(resp){
          Swal.fire('Adicionar Morada', 'Morada Adicionada', 'success').then(()=>{
            this.ref.unsubscribe();
            this.writeService.addAddress(this.newAddressForm.value);
          });
        }else{
          Swal.fire('Adicionar Morada', 'Ocorreu um erro ao adicionar esta morada', 'error');
        }
      });
  }
  
}
