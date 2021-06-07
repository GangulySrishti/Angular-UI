import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputUsername:String = "hello world";
  inputPassword:String = "hello world";
  counter:number = 0
  constructor() { }

  ngOnInit(): void {
  }

  countClicks(){
    this.counter += 1;
  }
}
