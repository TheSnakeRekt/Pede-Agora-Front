import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange, MatDialogRef, MatRadioButton, MatRadioChange, MAT_DIALOG_DATA } from '@angular/material';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-add-item-model',
  templateUrl: './add-item-model.component.html',
  styleUrls: ['./add-item-model.component.scss']
})
export class AddItemModelComponent implements OnInit {

  itemCount = 1;
  produto;
  grupos;
  extra:number = 0;
  options = new Array();
  optionPrice: number = 0;

  price:number;

  @Input()
  totalPrice:number = 0;

  @Output()
  changeRadio: EventEmitter<MatRadioChange>

  constructor(
    public dialogRef: MatDialogRef<AddItemModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private cartService: CartService
  ) {
    this.produto = data[0];
    this.grupos = data[1];
  
    if (this.produto.quantidade > 0) {
      this.itemCount = this.produto.quantidade;
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add() {
    this.itemCount += 1;
  }

  remove() {
    this.itemCount -= 1;
  }


  onChange(radio: MatRadioChange){
    this.extra = radio.value;
  }

  onChangeCheckBox(check: MatCheckboxChange){
    let value:any = check.source.value;

    if(check.checked){
      this.options.push(value)
    }else{
      this.options = this.options.filter(val => val.id != value.id);
    }
    this.optionPrice = 0;
    this.options.forEach(data=>{
      this.optionPrice += data.preco;
    })
  }

  ngOnInit() {
    // if (!this.data.deliveryDate) {
    //   this.data.deliveryDate = this.dates[0];
    //   this.data.deliveryTime = this.times[0];
    // }
  }

  addToCart() {
    this.produto.quantidade = this.itemCount;
    this.cartService.addToCart(this.produto);
  }

}
