import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message = 'Hello Worldzie!';
  color = 'red';
  isBig = true;
  isDisplayed = true;
  alertMessage = '';
  content = '';
  class:String = ''
  inputClass:String = ''

  constructor() { }

  ngOnInit(): void {
  }

  switchSize(){
    this.isBig = !this.isBig;
  }

  switchSizeInput(size : String){
    this.inputClass = size
  }


  switchDisplay(){
    this.isDisplayed = !this.isDisplayed;
  }

  displayAlert(message: String){
    alert(message)
  }

}
