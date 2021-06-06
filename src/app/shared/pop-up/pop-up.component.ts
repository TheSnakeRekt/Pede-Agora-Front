import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';
import { ValidateAccountComponent } from './validate-account/validate-account.component';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, public snackBarRef: MatSnackBarRef<PopUpComponent>, private matDialog:MatDialog) { }

  ngOnInit(): void {
  }

  verify(){
    this.snackBarRef.dismiss();
    
    const dialogRef = this.matDialog.open(ValidateAccountComponent, {
      width: '400px',
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(data=>{
      if(data){
        Swal.fire('Verificação de Conta','Conta Verificada', 'success');
      }
    })
  }
}
