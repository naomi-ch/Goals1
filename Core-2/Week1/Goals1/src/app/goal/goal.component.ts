import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'; //imported 'Goal' blueprint class
import { GoalService} from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';


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



  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate) //complete date from 'goal.ts'
    this.goals.push(goal)
  }

  
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  } 
  
  completeGoal(isComplete, index) {
        if (isComplete) {
          this.goals.splice(index,1);
        
      }
  }


  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete) {
        this.goals.splice(index,1);
        this.alertService.alertMe("This goal has been deleted")
      }
    }
  }


  constructor(goalService:GoalService, alertService:AlertService, private http:HttpClient) { //to make service available in (goal) component, add it to constructor func & instantiate it inside func 
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }

  ngOnInit(): void {
    interface ApiResponse { //defining an 'interface' to inform angular the kind of response we'll receive from the API
      author:string;
      quote:string;
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=> { //api request 
      //Succesful API request
      this.quote = new Quote(data.author, data.quote)
    }, err=>{
      this.quote = new Quote("Winston Churchill","Never never give up!")
      console.log("An error occured")
    })
  
  }

}
