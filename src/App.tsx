import Header from "./components/Header";
import { Main } from "./components/main";
import { useFetchQuestions } from "./components/useFetchQuestions";
import { useReducer } from "react";

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
};

const reducer = (state: any, action: { type: any; payload: any }) => {
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

  // NOTE: using custom use Hook
  useFetchQuestions("dataReceived", "dataFailed", dispatch);

  return (
    <div className="App">
      {/* <DateCounter /> */}
      <Header />
      <Main />
    </div>
  );
}
