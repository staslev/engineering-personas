import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question, Answer, Score} from '../data-model';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {

  questions: Question[];

  persona: string;

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService
      .getQuestions()
      .subscribe(qs => this.questions = qs);
  }

  computePersona() {

    var firstResponder = 0;
    var consultant = 0;
    var academic = 0;
    var craftsman = 0;
    var humanitarian = 0;

    for (let question of this.questions) {
      firstResponder = firstResponder + question.selectedScore.firstResponder;
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
}
