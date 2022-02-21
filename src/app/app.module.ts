import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { HttpClientModule } from "@angular/common/http";
import { EditQuizComponent } from './quizzes/quiz-edit/quiz-edit.component' ;
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./routing.module";
import {QuestionsFormComponent} from "./quizzes/questions-form/questions-form.component";
import {QuestionsComponent} from "./quizzes/questions/questions.component";
import {QuestionsListComponent} from "./quizzes/questions-list/questions-list.component";

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    EditQuizComponent,
    QuestionsFormComponent,
    QuestionsComponent,
    QuestionsListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
