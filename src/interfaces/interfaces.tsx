export interface IQuestion {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

export interface IState {
  questions: IQuestion[];
  status: string;
  index: number;
  answer: null;
  points: number;
  highscore: number;
  // secondRemaining: number;
  secondsRemaining: number;
}

export interface IAction {
  type:
    | "dataReceived"
    | "dataFailed"
    | "start"
    | "newAnswer"
    | "nextQuestion"
    | "finish"
    | "restart"
    | "tick";
  // payload: string | boolean | null | undefined | number;
  payload: any;
}
