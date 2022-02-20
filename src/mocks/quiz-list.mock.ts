import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
     label: 'Jean Gabin a joué dans...',
     answers: [
         {
             value: 'Les tuches II',
             isCorrect: false,
         },
         {
             value: 'La grande illusion',
             isCorrect: true,
         }
     ]
};

export const QUESTION_SPORT: Question = {
  label: 'Qui à gagné la coupe du monde en 2018...',
  answers: [
    {
      value: 'France',
      isCorrect: false,
    },
    {
      value: 'Allemagne',
      isCorrect: true,
    }
  ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Nom Quiz Modifié', // What's happening if I change this value..?
        theme: 'Actor',
        questions: [QUESTION_ACTOR],
        id : 'Actor1'
    },
    {
        name: 'Les Sports',
        theme: 'Football',
        questions: [QUESTION_SPORT],
        id : 'Sport1'
    }
];
