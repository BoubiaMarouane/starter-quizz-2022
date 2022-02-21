import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {Question} from "../../../models/question.model";
import {QuestionService} from "../../../services/questions.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-quest-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.scss']
})

export class QuestionsFormComponent{

  public questionForm: FormGroup;

  id = this.route.snapshot.paramMap.get('id');

  constructor(public formBuilder: FormBuilder, public questionService: QuestionService, private route: ActivatedRoute) {
    this.questionForm = this.formBuilder.group({
      label: [''],
      answers: this.formBuilder.array([])
    });
  }
  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }
  private createAnswer(){
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
    });
  }

  addAnswer(){
    this.answers.push(this.createAnswer());
  }

  addQuestion() {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const questionToCreate: Question = this.questionForm.getRawValue() as Question;

    // Do you need to log your object here in your class? Uncomment the code below
    // and open your console in your browser by pressing F12 and choose the tab "Console".
    // You will see your quiz object when you click on the create button.
    console.log('Add question: ', questionToCreate);

    // Now, add your quiz in the list!
    this.questionService.addQuiz(questionToCreate);
  }

}
