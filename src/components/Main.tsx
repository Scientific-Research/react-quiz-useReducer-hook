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
import { Progress } from "./Progress";
import { FinishScreen } from "./FinishScreen";

export const Main = ({
  questions,
  status,
  dispatch,
  index,
  answer,
  points,
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
  points: number;
}) => {
  // console.log(questions);
  // 'loading', 'error', 'ready', 'active', 'finished'

  // let maxPossiblePoints = 0;
  // maxPossiblePoints = maxPossiblePoints + points;
  // or we can use reducer in JavaScript:
  const maxPossiblePoints = questions.reduce((cur, acc) => cur + acc.points, 0);
  return (
    <>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <StartScreen questions={questions} dispatch={dispatch} />
      )}
      {status === "active" && (
        <>
          <Progress
            index={index}
            questions={questions}
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            answer={answer}
          />

          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
          <NextButton dispatch={dispatch} answer={answer} />
        </>
      )}
      {status === "finished" && (
        <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} />
      )}
    </>
  );
};
