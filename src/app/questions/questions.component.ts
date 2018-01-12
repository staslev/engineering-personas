import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Answer } from '../answer';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question: Question = {
    text: "I discover a bug in a codebase I'm working on, my response is ...",
    options: [
      {
        id: 'A bug? We\'ll need to increase the coverage of our test suites.',
        FirstResponder: 0,
        Consultant: 0,
        Academic: 0,
        Craftsman: 2,
        Humanitarian: 0
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
