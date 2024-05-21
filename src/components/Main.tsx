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
    type: "dataReceived" | "dataFailed" | "start" | "newAnswer";
    payload: [];
  }) => void;
  index: number;
  answer: string;
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
        <Question
          question={questions[index]}
          dispatch={dispatch}
          answer={answer}
        />
      )}
    </>
  );
};
