import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { QuestionService } from './question.service';
import { Question } from '../data-model';

@Injectable()
export class QuestionsResolverService implements Resolve<Question[]> {

  constructor(private qs: QuestionService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question[]> {
    return this.qs.getQuestions().take(1);
  }

}
