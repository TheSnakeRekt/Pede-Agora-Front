import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { Account, AccountToken } from '../../definitions/Account';
import { LoginService } from '../../services/login.service';
import { ReadService } from '../../services/read.service';
import { WriteService } from '../../services/write.service';
import { ChangeInfoComponentComponent } from '../change-info-component/change-info-component.component';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  currentRoute = "orders";

  AccountToken: AccountToken;
  account: Account;
  constructor(private router: Router, private matDialog: MatDialog, private readService: ReadService, private writeService: WriteService, private loginService:LoginService) { 
    this.readService.getAccount().subscribe(data=>{
      this.AccountToken = data;
      this.account = data.account;
    });
  }

  changeChildRoute(name){
    this.currentRoute = name;
  }


  logout(){
    this.AccountToken = {
      access:false,
      account:{} as Account
    };

    this.writeService.addAccount(this.AccountToken)

    this.router.navigate(['/home']).then(()=>{
      window.location.reload();
    });
  }


  editPassword(){
    const dialogRef = this.matDialog.open(ChangeInfoComponentComponent, {
      width: '400px',
      data: this.account
    });
  }

  ngOnInit() {
    if(!this.AccountToken.access){
      this.loginService.validateToken(localStorage.getItem("TOKEN")).subscribe(data=>{
        this.AccountToken = data;
       
        this.writeService.addAccount(data);
        if(!this.AccountToken.access){
          this.router.navigate(["/login"]);
        }
      });
    }
  }

}
