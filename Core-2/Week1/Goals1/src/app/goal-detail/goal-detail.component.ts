import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal!: Goal; //define 'goal' as the property that will undergo 'INPUT PROPERTY BINDING'. Of type 'GOAL'(from blueprint class)
  @Output() isComplete = new EventEmitter<boolean>(); //eventemitter that takes in a boolean



  goalDelete(complete:boolean){
    this.isComplete.emit(complete); //calls 'emit' method on 'isComplete' eventemitter.
                                    //this passes this event to the parent co
  }


  constructor() { }

  ngOnInit(): void {
  }

}
