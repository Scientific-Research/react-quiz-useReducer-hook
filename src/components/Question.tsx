import { IQuestion } from "../interfaces/interfaces";

export const Question = ({ question }: { question: IQuestion }) => {
  console.log(question);
  return (
    <>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option) => (
          <button key={option} className="btn btn-option">
            {option}
          </button>
        ))}
      </div>
    </>
  );
};
