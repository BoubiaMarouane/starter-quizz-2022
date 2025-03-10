import { Question } from './question.model';

export interface Quiz {
    name: string;
    theme?: string;
    questions: Question[];
    creationDate?: Date ;
    id : string
}
