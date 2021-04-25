import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../definitions/User'
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { WriteService } from '../../services/write.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormgroup: FormGroup;
  user: UserLogin;
  constructor(private loginService:LoginService, 
    private router: Router, 
    private accountState: WriteService) { }

  ngOnInit() {
    this.loginFormgroup = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    }, Validators.required);
  }

  login(){
    if(this.loginFormgroup.valid){
      this.user = {
        name: this.loginFormgroup.controls.username.value,
        account:{
          password:this.loginFormgroup.controls.password.value
        }
      } 

      this.loginService.logIn(this.user).subscribe(data=>{
        
        if(data.access){
          this.accountState.addAccount(data);

          this.router.navigate(["/home"]);
        }else{
          this.accountState.removeAccount();
        }
      })
    }
  }

}
