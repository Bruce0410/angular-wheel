import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChild(NgxWheelComponent, { static: false }) wheel;

  seed = [...Array(12).keys()]
  seed2 = ["Player 1","Player 2"];

  nameModel: string = "";
  listOfNames = [];
  idToLandOn: any;
  items: any[];
  items2: any[];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER
  value = '';
  ngOnInit() {
    this.init();
  }

  reset() {
    this.init();
    this.wheel.reset();
    //location.reload();
  }

  delete(index) {
    this.seed2.splice(index, 1);
    this.init();
  }

  init() {
    this.items = null;
    this.idToLandOn = this.seed2[Math.floor(Math.random() * this.seed2.length)];
    // console.log(this.idToLandOn);
    const colors = ['#0c5c69', '#ed6d00']
    this.items = this.seed2.map((value, index) => ({
      fillStyle: colors[index % 2],
      text: `${value}`,
      id: value,
      textFillStyle: 'white',
      textFontSize: '16'
    }))
    // console.log(this.items);
    setTimeout(() => {
      this.wheel.reset();
      // console.log(123);
    }, 500);

  }

  onSubmit() {
    this.seed2.push(this.nameModel)
    // console.log(this.seed2);
    this.nameModel = '';
    this.init()
  }

  valuechange(newValue) {
    this.nameModel = newValue;
    // console.log(newValue)
  }
  before() {
    // alert('Your wheel is about to spin')
  }

  // async spin(prize) {
  //   this.idToLandOn = prize
  //   await new Promise(resolve => setTimeout(resolve, 0));
  //   this.wheel.spin()
  // }

  after() {
    // alert('You have been bamboozled')
  }




}
