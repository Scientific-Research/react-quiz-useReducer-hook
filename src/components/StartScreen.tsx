import { IQuestion } from "../interfaces/interfaces";

export const StartScreen = ({
  questions,
  dispatch,
}: {
  questions: IQuestion[];
  dispatch: (arg0: {
    type: "dataReceived" | "dataFailed" | "start";
    payload: [];
  }) => void;
}) => {
  // console.log(questions);

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{questions.length} questions to test your React mastery!</h3>
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: "start",
            payload: [],
          })
        }
      >
        Let's start!
      </button>
    </div>
  );
};
