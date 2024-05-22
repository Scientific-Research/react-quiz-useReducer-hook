/* 
export const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className="main">{children}</main>;
};
*/

import Loader from "./Loader";
import Error from "./Error";
import { StartScreen } from "./StartScreen";
import { Question } from "./Question";
import { IQuestion } from "../interfaces/interfaces";
import { NextButton } from "./NextButton";

export const Main = ({
  questions,
  status,
  dispatch,
  index,
  answer,
}: {
  questions: IQuestion[];
  status: string;
  // dispatch: any;
  dispatch: // (value: any): void;
  // (arg0: { type: "dataReceived" | "dataFailed"; payload: [] }) => void;
  (arg0: {
    type:
      | "dataReceived"
      | "dataFailed"
      | "start"
      | "newAnswer"
      | "nextQuestion";
    // payload: any;
    payload: string | boolean | null | undefined | number;
  }) => void;
  index: number;
  answer: number;
}) => {
  // console.log(questions);
  // 'loading', 'error', 'ready', 'active', 'finished'
  return (
    <>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <StartScreen questions={questions} dispatch={dispatch} />
      )}
      {status === "active" && (
        <>
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
          <NextButton dispatch={dispatch} answer={answer} />
        </>
      )}
    </>
  );
};
