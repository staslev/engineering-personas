export class Question {
  id: number;
  text: string;
  options: Answer[]
  selectedScore: Score;
}

export class Answer {
  label: string;
  score: Score;
}

export class Score {
  firstResponder: number;
  consultant: number;
  academic: number;
  craftsman: number;
  humanitarian: number;
}
