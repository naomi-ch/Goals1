// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Goals';
// }


import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:Goal[] = [
    {id:1,name: 'Watch Finding Nemo'},
    {id:2,name: 'Buy Cookies'},
    {id:3,name: 'Get New Phone Case'},
    {id:4,name: 'Get Dog Food'},
    {id:5,name: 'Solve Math Homework'},
    {id:6,name: 'Plot My World Domination Plan'},
  ];
}
  


