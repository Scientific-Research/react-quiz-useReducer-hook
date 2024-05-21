import { IQuestion } from "../interfaces/interfaces";

export const Question = ({ question }: { question: IQuestion }) => {
  console.log(question);
  return (
    <>
      <h4>{question.question}</h4>
    </>
  );
};
