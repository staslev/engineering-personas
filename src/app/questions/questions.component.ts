import { Component, OnInit } from '@angular/core';
import { Question, Answer, Score, Persona, FirstResponder, Consultant, Academic, Craftsman,
Humanitarian} from '../data-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {

  someRange: number[] = [100, 1000];

  decoded:boolean = false;

  questions: Question[];

  persona: Persona;

  getQuestions(){
    return this.http
            .get<Question[]>("../assets/eng-persona.json")
            .subscribe(qs => this.questions = qs);
  }

  computePersona() {

    var firstResponder = 0;
    var consultant = 0;
    var academic = 0;
    var craftsman = 0;
    var humanitarian = 0;

    for (let question of this.questions) {
        console.log("computing persona");
        firstResponder = firstResponder + question.selectedScore.firstResponder;
        console.log("firstResponder:" + firstResponder);
        consultant = consultant + question.selectedScore.consultant;
        academic = academic + question.selectedScore.academic;
        craftsman = craftsman + question.selectedScore.craftsman;
        humanitarian = humanitarian + question.selectedScore.humanitarian;

        var max = Math.max(firstResponder, consultant, academic, craftsman, humanitarian)

        if(max == firstResponder) {
          this.persona = new FirstResponder();
          console.log("computing persona: firstResponder");
        } else if(max == consultant) {
          this.persona = new Consultant();
          console.log("computing persona: consultant");
        } else if(max == academic) {
          this.persona = new Academic();
          console.log("computing persona: academic");
        } else if(max == craftsman) {
          this.persona =  new Craftsman();
          console.log("computing persona: craftsman");
        } else if(max == humanitarian) {
          this.persona =  new Humanitarian();
          console.log("computing persona: humanitarian");
        } else {
          this.persona =  new Persona('Spy', 'Your persona cannot be identified!');
        }
    }

  }

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.getQuestions();
  }

}
