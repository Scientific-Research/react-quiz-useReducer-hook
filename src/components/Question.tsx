import { IQuestion } from "../interfaces/interfaces";
import { Options } from "./Options";

export const Question = ({
  question,
  dispatch,
  answer,
}: {
  question: IQuestion;
  dispatch: (arg0: {
    type: "dataReceived" | "dataFailed" | "start" | "newAnswer";
    payload: [];
  }) => void;
  answer: number;
}) => {
  console.log(question);

  return (
    <>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </>
  );
};
