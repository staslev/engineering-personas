import { Component, OnInit } from '@angular/core';
import { Question, Answer, Score} from '../data-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormsModule }   from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {

  decoded:boolean = false;

  questions: Question[];

  persona: string;

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
          this.persona = 'FirstResponder';
          console.log("computing persona: firstResponder");
        } else if(max == consultant) {
          this.persona = 'Consultant';
          console.log("computing persona: consultant");
        } else if(max == academic) {
          this.persona = 'Academic';
          console.log("computing persona: academic");
        } else if(max == craftsman) {
          this.persona =  'Craftsman';
          console.log("computing persona: craftsman");
        } else if(max == humanitarian) {
          this.persona =  'Humanitarian';
          console.log("computing persona: humanitarian");
        } else {
          this.persona =  'Spy';
        }
    }

    this.router.navigate(['persona', this.persona]);
  }

  constructor( private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getQuestions();
  }

}
