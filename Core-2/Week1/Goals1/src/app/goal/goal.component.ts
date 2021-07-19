import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'; //imported 'Goal' blueprint class
import { GoalService} from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Quote } from '../quote-class/quote';
import { Router } from '@angular/router';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  providers : [GoalService]
})
export class GoalComponent implements OnInit {

  goals:Goal[];
  alertService:AlertService;
  quote!: Quote;

  
  goToUrl(id) {
    this.router.navigate(['/goals',id])
  }

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate) //complete date from 'goal.ts'
    this.goals.push(goal)
  }

    

  deleteGoal(index){ //remove isComplete
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete) {
        this.goals.splice(index,1);
        this.alertService.alertMe("This goal has been deleted")
      }
  }


  constructor(goalService:GoalService, alertService:AlertService, private quoteService:QuoteRequestService, private router:Router) { //to make service available in (goal) component, add it to constructor func & instantiate it inside func 
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }

  ngOnInit(): void {
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }
  
}

  //toggleDetails(index){
    //this.goals[index].showDescription = !this.goals[index].showDescription;
  //} 


  //completeGoal(isComplete, index) {
        //if (isComplete) {
          //this.goals.splice(index,1);
        
      //}
  //}
