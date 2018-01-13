export class Question {
  text: string;
  options: Answer[]
}

export class Answer {
  id: string;
  score: Score;
}

export class Score {
  FirstResponder: number;
  Consultant: number;
  Academic: number;
  Craftsman: number;
  Humanitarian: number;
}
