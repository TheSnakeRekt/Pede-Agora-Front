import { Component, Inject, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Account } from '../../../definitions/Account';
import { ProfileService } from '../../../services/profile.service';
import { ReadService } from '../../../services/read.service';
import * as moment from 'moment';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-validate-account',
  templateUrl: './validate-account.component.html',
  styleUrls: ['./validate-account.component.scss']
})
export class ValidateAccountComponent implements OnInit, OnDestroy {

  clicked: boolean;
  account: Account;
  countdown: string = 'Pedir Código';
  code: FormControl;
  error: string;
  subscritpions: Subscription[] = new Array();

  constructor(private readService: ReadService, private profileService: ProfileService, public dialogRef: MatDialogRef <ValidateAccountComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.readService.getAccount().subscribe(data=>{
      this.account = data.account;
    });

    this.code = new FormControl();
  }
  ngOnDestroy(): void {
    this.subscritpions.forEach(sub=>{
      sub.unsubscribe();
    })
  }

  ngOnInit(): void {

  }

  requestCode(){
    if(!this.clicked){
      this.clicked = true;

      let sub = this.profileService.requestCode(this.account.token).subscribe(data=>{
        this.checkTime(moment(new Date(data)).subtract(1,'h'));
      });

      this.subscritpions.push(sub);
    }
  }

  validate(){
      this.profileService.validateAccount(this.code.value, this.account.token).subscribe(data=>{
        if(data.status == '16'){
          this.error = 'O Código não corresponde, ou já foi verificado';
        }

        if(data.status == '0' || data.status == '6'){
          this.dialogRef.close(true);
        }
      });
  }

  private checkTime(date){

    let sub = timer(0,60000).subscribe(()=>{
      this.countdown = `${moment.duration(date.diff(new Date())).minutes()} Minutos`;

      if(moment.duration(date.diff(new Date())).minutes() == 0){
        this.clicked = false;
        sub.unsubscribe();
      }
    });

    this.subscritpions.push(sub);
  }
}
