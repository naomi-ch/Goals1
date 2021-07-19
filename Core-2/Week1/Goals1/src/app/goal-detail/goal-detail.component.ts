import { Component, OnInit, } from '@angular/core';
import { Goal } from '../goal';
import { ActivatedRoute } from '@angular/router'; //removed ParamMap
import { GoalService } from '../goal-service/goal.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  goal!: Goal; //define 'goal' as the property that will undergo 'INPUT PROPERTY BINDING'. Of type 'GOAL'(from blueprint class)





  constructor(private route:ActivatedRoute, private service:GoalService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id)
  }

}


//@Output() isComplete = new EventEmitter<boolean>(); //eventemitter that takes in a boolean
//goalDelete(complete:boolean){
  //this.isComplete.emit(complete); //calls 'emit' method on 'isComplete' eventemitter.
  //this passes this event to the parent co
//}