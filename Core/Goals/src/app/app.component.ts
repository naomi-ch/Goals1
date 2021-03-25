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
    {id:1,name:'Watch Finding Nemo',description:'Find an online version and watch Merlin find his son'},
    {id:2,name:'Buy Cookies',description:'I have to by cookies for the parrot'},
    {id:3,name:'Get New Phone Case',description:'Diana has her birthday coming up soon'},
    {id:4,name:'Get Dog Food',description:'Pupper likes expensive snacks'},
    {id:5,name:'Solve Math Homework',description:'Damn Math'},
    {id:6,name:'Plot My World Domination Plan',description:'Cause I am an evil overlord'},
  ];
}
  


