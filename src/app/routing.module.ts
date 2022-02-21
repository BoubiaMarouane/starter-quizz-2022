import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import {EditQuizComponent} from "./quizzes/quiz-edit/quiz-edit.component";
import {QuestionsFormComponent} from "./quizzes/questions-form/questions-form.component";


const routes: Routes = [
  {path: 'quizlist', component: QuizListComponent},
  {path: 'quizform', component: QuizFormComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'edit', component: EditQuizComponent},
  { path: '', redirectTo: '/quizlist', pathMatch: 'full' },
  { path: 'edit/:id', component: QuestionsFormComponent },
]

@NgModule({
  imports: [RouterModule. forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
