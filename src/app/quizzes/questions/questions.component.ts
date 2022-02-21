import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Question } from '../../../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  /**
   * Input here could be undefined, if the parent component doesn't give any quiz.
   * If you remove `undefined`, you will have an error saying:
   * "Property 'quiz' has no initializer and is not definitely assigned in the constructor."
   * We can also defined the initial value of the quiz in the constructor.
   */
  @Input()
  question: Question | undefined;

  @Output()
  questionDeleted: EventEmitter<Question> = new EventEmitter<Question>();

  constructor() {
  }

  ngOnInit() {
  }

  questionDelete(question: Question) {
    console.log("question deleted:",question);
    this.questionDeleted.emit(question);
  }
}
