import { Component, OnInit } from '@angular/core';
import { Question, Answer, Score } from '../data-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {

  questions: Question[];

  getQuestions(){
    return this.http.get<Question[]>("../assets/eng-persona.json")
    .subscribe(qs => this.questions = qs);
  }

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.getQuestions();
  }

}
