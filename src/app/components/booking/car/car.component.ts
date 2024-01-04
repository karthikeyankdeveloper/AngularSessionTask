import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CurrencyPipe],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss'
})
export class CarComponent {


  protected room: any;
  protected noroom: any;
  protected facilityamount: any = 0;
  protected finalAmount: any = 0;
  constructor(private formBuilder: FormBuilder) { }

  protected hotelform = this.formBuilder.group({
    room: ['', Validators.required],
    number: ['', Validators.required],
    person: ['', Validators.required],
    children: ['', Validators.required],
    restaurant: ['', Validators.required]
  })

  submitHotelform() {
    console.log(this.hotelform.value);
  }

  protected selectRoom(room: any) {
    this.room = room;
    this.calculateFee();
  }

  protected selectnoRoom(noroom: any) {
    this.noroom = noroom;
    this.calculateFee();
  }

  protected facility(facility: any) {
    if(facility=='Yes'){
      this.facilityamount = 1000;
    }else if(facility=='No'){
      this.facilityamount = 0;
    }
    this.calculateFee();
  }

  private calculateFee() {
    if (this.room == "A/C room") {
      if (this.noroom == 1) {
        this.finalAmount =( 500 * this.noroom) + this.facilityamount;
      }
      else if (this.noroom == 2) {
        this.finalAmount =( 500 * this.noroom) + this.facilityamount;
      }
    }
    else {
      if (this.noroom == 1) {
        this.finalAmount =( 300 * this.noroom) + this.facilityamount;
      }
      else if (this.noroom == 2) {
        this.finalAmount =( 300 * this.noroom) + this.facilityamount;
      }
    }
  }


}
