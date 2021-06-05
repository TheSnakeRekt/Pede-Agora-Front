import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ScheduleTime } from '../header/header.component';

@Component({
  selector: 'app-sheduled-deliver-model',
  templateUrl: './sheduled-deliver-model.component.html',
  styleUrls: ['./sheduled-deliver-model.component.scss']
})
export class SheduledDeliverModelComponent implements OnInit {

  now:Date = new Date();
 
  dates = [
  ];

  times = [
    "12:00 - 12:30",
    "13:00 - 13:30",
    "14:00 - 14:30",
    "15:00 - 15:30",
    "16:00 - 16:30",
    "17:00 - 17:30",
    "18:00 - 18:30",
    "19:00 - 19:30",
    "20:00 - 20:30",
    "21:00 - 21:30",
    "22:00 - 22:30",
  ];

  constructor(
    public dialogRef: MatDialogRef<SheduledDeliverModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ScheduleTime
    ) {
     
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

    let dayT = this.now.getDay();

    for(let i = 0; i < 7; i++){
      switch(i){
        case 0:
          this.dates[i] = `Hoje, ${this.dateToPTDayOfWeek(dayT, i)}, ${this.now.getDate()} de ${this.dateToPTMonth(this.now.getMonth())}`;
          break;
        case 1:
          this.dates[i] = `Amanhã, ${this.dateToPTDayOfWeek(dayT, i)}, ${this.now.getDate() + i} de ${this.dateToPTMonth(this.now.getMonth())}`;
          break;
        default:
          this.dates[i] = `${this.dateToPTDayOfWeek(dayT, i)},  ${this.now.getDate()+i} de ${this.dateToPTMonth(this.now.getMonth())}`;
          break;  
      }
    }

    if (!this.data.deliveryDate) {
      this.data.deliveryDate = this.dates[0];
      this.data.deliveryTime = this.times[0];
    }
  }


  dateToPTDayOfWeek(day:number, currentCycle:number): string{
    if(day + currentCycle > 6){
      day = (day - (day + 1)) + currentCycle ;
    }else{
      day = day + currentCycle;
    }

    switch(day){
      case 0:
        return "Domingo";
      case 1:
        return "Segunda-feira";
      case 2:
        return "Terça-feira";
      case 3:
        return "Quarta-feira";
      case 4:
        return "Quinta-feira";
      case 5:
        return "Sexta-feira";
      case 6:
        return "Sábado";  
    }
  }

  dateToPTMonth(month:number): string{
    switch(month){
      case 0:
        return "Janeiro";
      case 1:
        return "Feveiro";
      case 2:
        return "Março";
      case 3:
        return "Abril";
      case 4:
        return "Maio";
      case 5:
        return "Junho";
      case 6:
        return "Julho";
      case 7:
        return "Agosto";
      case 8:
        return "Setembro";
      case 9:
        return "Outobro";
      case 10:
        return "Novembro";
      case 11:
        return "Dezembro"; 
    }
  }

}
