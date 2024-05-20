import Header from "./components/Header";
import { Main } from "./components/Main";
import { useFetchQuestions } from "./components/useFetchQuestions";
import { useReducer } from "react";

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
};

interface State {
  questions: {};
  status: string;
}

interface Action {
  type: "dataReceived" | "dataFailed";
  payload: [];
}

const reducer = (state: State, action: Action) => {
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

    default:
      throw new Error("Action unknown");
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status } = state;
  // const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  // const numOfQuestions = questions.length;
  // console.log(numOfQuestions);

  // NOTE: using custom use Hook
  useFetchQuestions("dataReceived", "dataFailed", dispatch);

  return (
    <div className="App">
      <Header />
      <Main questions={questions} status={status} />
    </div>
  );
}
