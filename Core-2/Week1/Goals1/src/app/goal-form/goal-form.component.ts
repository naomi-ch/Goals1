import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goal(0,"","",new Date());
@Output() addGoal = new EventEmitter<Goal>(); //created 'addGoal' EVENTEMITTER object of type 'GOAL' that will emit to the parent component (goal.component)

  submitGoal() { //created the submitGoal() function in which we use the emit method and pass in the new goal object we want to create.
    this.addGoal.emit(this.newGoal);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
