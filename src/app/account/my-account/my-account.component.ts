import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account, AccountToken } from '../../definitions/Account';
import { ReadService } from '../../services/read.service';
import { WriteService } from '../../services/write.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  currentRoute = "orders";

  AccountToken: AccountToken;
  account: Account;
  constructor(private router: Router,private activetedRoute: ActivatedRoute, private readService: ReadService, private writeService: WriteService) { 
    this.readService.getAccount().subscribe(data=>{
      this.AccountToken = data;
      console.log(data)
      if(!this.AccountToken.access){
        this.router.navigate(['/login']);
      }
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

  ngOnInit() {
  
  }

}
