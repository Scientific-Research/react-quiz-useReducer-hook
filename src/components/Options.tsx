import { IQuestion } from "../interfaces/interfaces";

export const Options = ({
  question,
  dispatch,
  answer,
}: {
  question: IQuestion;
  dispatch: (arg0: {
    type: "dataReceived" | "dataFailed" | "start" | "newAnswer";
    payload: any;
  }) => void;
  answer: string;
}) => {
  return (
    <div className="options">
      {question.options.map((option: string, index) => (
        <button
          key={option}
          className="btn btn-option"
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
