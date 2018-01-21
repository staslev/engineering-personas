import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Question } from '../data-model';

@Injectable()
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(
        "https://raw.githubusercontent.com/staslev/engineering-personas/gh-pages/assets/eng-persona.json")
  }
}
