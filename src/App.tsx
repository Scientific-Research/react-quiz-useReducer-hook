import Header from "./components/Header";
import { Main } from "./components/Main";
import { useFetchQuestions } from "./components/useFetchQuestions";
import { useReducer } from "react";
import { IQuestion } from "./interfaces/interfaces";

interface IState {
  questions: IQuestion[];
  status: string;
  index: number;
  answer: null;
  points: number;
  highscore: number;
  secondRemaining: number;
}

interface IAction {
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

const initialState: IState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  // when index value changes, it shows that the current question already read and we want to move to the next question!
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondRemaining: 10, // 10 seconds
};

// {
//   "question": "Which is the most popular JavaScript framework?",
//   "options": ["Angular", "React", "Svelte", "Vue"],
//   "correctOption": 1,
//   "points": 10
// },

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        // NOTE: we update both state variables (questions and status) in one go by dispatching dataReceived => this is the real advantage of using useReducer
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      // which question is the current question?
      const question = state.questions[state.index];
      // const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          // if the current correct option as current answer is equal to the received answer?
          action.payload === question.correctOption
            ? // if it is so, we want to add some pints to the current point!
              state.points + question.points
            : // otherweise, it stays the same!
              state.points,
      };
    case "nextQuestion":
      // answer: null => will set the answer to the default mode => it doesn't show the answers!
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      // return {
      //   ...state,
      //   status: "ready", // after clicking on the Restart Quiz => it starts from start page again!
      //   index: 0,
      //   answer: null,
      //   points: 0,
      //   secondRemaining: initialState.secondRemaining,
      // };
      // OR this one:
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        // if the remaning second is 0 => go to the finished page, otherweise, keep it on!
        status: state.secondRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Action unknown");
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    questions,
    status,
    index,
    answer,
    points,
    highscore,
    secondRemaining,
  } = state;
  // const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  // const numOfQuestions = questions.length;
  // console.log(numOfQuestions);

  // NOTE: using custom use Hook
  useFetchQuestions("dataReceived", "dataFailed", dispatch);

  return (
    <div className="App">
      <Header />
      <Main
        questions={questions}
        status={status}
        dispatch={dispatch}
        index={index}
        answer={answer}
        points={points}
        highscore={highscore}
        secondRemaining={secondRemaining}
      />
    </div>
  );
}
