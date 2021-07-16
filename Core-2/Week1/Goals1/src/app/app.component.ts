import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:string[]; //'goals' is a property & is attributed to an empty string array

  constructor(){ //constructor func defines the logic that should be executed once the class (AppComponent from above) is instantiated
    this.goals = ['Watch Finding Nemo','Buy Cookies','Get Phone Case']
  }
}
