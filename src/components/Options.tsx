import { IQuestion } from "../interfaces/interfaces";

export const Options = ({
  question,
  dispatch,
  answer,
}: {
  question: IQuestion;
  dispatch: (arg0: {
    type: "dataReceived" | "dataFailed" | "start" | "newAnswer";
    payload: number;
  }) => void;
  answer: number;
}) => {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option: string, index) => (
        <button
          key={option}
          // className="btn btn-option"
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
