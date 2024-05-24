import { IQuestion } from "../interfaces/interfaces";

export const NextButton = ({
  dispatch,
  answer,
  index,
  questions,
}: {
  dispatch: (arg0: { type: "nextQuestion" | "finish"; payload: null }) => void;
  answer: number;
  index: number;
  questions: IQuestion[];
}) => {
  if (answer === null) return null;
  // with below if statement, when we answer the last question(15th question), we will not see the next button anymore, because there is no sixtheen question there! if (14 < 15 - 1) => the result is false => we will not see the Next button anymore!

  return (
    <>
      {index < questions.length - 1 && (
        <button
          className="btn btn-ui"
          onClick={() =>
            dispatch({
              type: "nextQuestion",
              payload: null,
            })
          }
        >
          Next
        </button>
      )}
      {index === questions.length - 1 && (
        <button
          className="btn btn-ui"
          onClick={() =>
            dispatch({
              type: "finish",
              payload: null,
            })
          }
        >
          Finish
        </button>
      )}
    </>
  );
};
