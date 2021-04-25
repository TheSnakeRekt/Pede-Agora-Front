import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { WriteService } from '../../services/write.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signInFormGroup: FormGroup;

  constructor(private loginService: LoginService, private router: Router, private writeService: WriteService) {}

  ngOnInit() {
    this.signInFormGroup= new FormGroup({
      nome: new FormControl('', Validators.required),
      apelido: new FormControl(''),
      nif: new FormControl(''),
      telefone: new FormControl('', Validators.minLength(9)),
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      morada :new FormControl('',Validators.required),
      codigopostal: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required)
    });
  }

  signUp() {
    if(this.signInFormGroup.valid) {
      this.loginService.signIn(this.signInFormGroup.value).subscribe(data=>{
        
        if(data){
          this.writeService.addAccount(data);
          this.router.navigate(['/home'])
        }
      });
    }
  }

}


