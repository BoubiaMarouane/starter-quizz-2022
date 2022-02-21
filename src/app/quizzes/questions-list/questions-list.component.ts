import { Component, OnInit } from '@angular/core';
import { Question } from '../../../models/question.model';
import {QuestionService} from "../../../services/questions.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  public questionList: Question[] = [];

  constructor(public questionService: QuestionService) {
    this.questionService.questions$.subscribe((questionList) => {
      this.questionList = questionList;
    });
  }

  ngOnInit() {
  }

  questionToDeleted(questionToDelete : Question){
    console.log('event received from child:', questionToDelete);
    this.questionService.delete(questionToDelete);
  }
}
