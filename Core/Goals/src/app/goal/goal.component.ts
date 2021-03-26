import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[]= [
    new Goal(1,'Watch Finding Nemo','Find an online version and watch Merlin find his son'),
    new Goal(2,'Buy Cookies','I have to by cookies for the parrot'),
    new Goal(3,'Get New Phone Case','Diana has her birthday coming up soon'),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks'),
    new Goal(5,'Solve Math Homework','Damn Math'),
    new Goal(6,'Plot My World Domination Plan','Cause I am an evil overlord'),
  ];

    toggleDetails(index){
      this.goals[index].showDescription = !this.goals[index].showDescription;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
