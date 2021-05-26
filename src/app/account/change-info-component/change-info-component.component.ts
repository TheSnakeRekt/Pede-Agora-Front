import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Account } from '../../definitions/Account';
import { ProfileService } from '../../services/profile.service';
import { ReadService } from '../../services/read.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-change-info-component',
  templateUrl: './change-info-component.component.html',
  styleUrls: ['./change-info-component.component.scss']
})
export class ChangeInfoComponentComponent implements OnInit {


  newPasswordForm: FormGroup;
  account: Account;

  constructor(public dialogRef: MatDialogRef<ChangeInfoComponentComponent>, private profileService: ProfileService, private readService: ReadService) { 
    this.readService.getAccount().subscribe(data=>{
      this.account = data.account;
    })
  }

  ngOnInit(): void {
    this.newPasswordForm = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      passControl: new FormControl('', Validators.required)
    });
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  changePassword():void{
    if(this.newPasswordForm.get('passControl').value != this.newPasswordForm.get('newPassword').value){
      Swal.fire("Modificar Password", "As Passwords não são iguais!", "error");
      return;
    }

    if(this.newPasswordForm.valid){
      this.profileService.changePassword(this.newPasswordForm.get('oldPassword').value, this.newPasswordForm.get('newPassword').value, this.account.token).subscribe(data=>{
        if(data){
          this.dialogRef.close();
          Swal.fire("Modificar Password", "Password Modificada", "success");
        }else{
          Swal.fire("Modificar Password", "Ocorreu um erro ao modificar a password", "error");
        }
      });
    }
   
  }
}
