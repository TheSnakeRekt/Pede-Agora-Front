import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-info-component',
  templateUrl: './change-info-component.component.html',
  styleUrls: ['./change-info-component.component.scss']
})
export class ChangeInfoComponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChangeInfoComponentComponent>) { }

  ngOnInit(): void {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
