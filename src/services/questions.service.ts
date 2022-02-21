import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../models/question.model';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private empty : Question[] = [];
  private questions: Question[] = this.empty;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.empty);

  constructor() {

  }

  addQuiz(question: Question) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.questions.push(question);
    this.questions$.next(this.questions);
  }

  delete(questionToDelete: Question) {
    this.questions = this.questions.filter(q => q!=questionToDelete);
    this.questions$.next(this.questions);
  }

}
