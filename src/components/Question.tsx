import { IQuestion } from "../interfaces/interfaces";
import { Options } from "./options";

export const Question = ({ question }: { question: IQuestion }) => {
  console.log(question);

  return (
    <>
      <h4>{question.question}</h4>
      <Options question={question} />
    </>
  );
};
