import { IQuestion } from "../interfaces/interfaces";

export const Question = ({ question }: { question: IQuestion }) => {
  console.log(question);
  return <div>Question</div>;
};
