import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';


@Component({
  selector: 'app-edit',
  templateUrl: './quiz-edit.component.html',
  styleUrls: ['./quiz-edit.component.scss']
})
export class EditQuizComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor() {
  }

}
