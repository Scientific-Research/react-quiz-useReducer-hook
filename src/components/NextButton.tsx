export const NextButton = ({
  dispatch,
  answer,
}: {
  dispatch: (arg0: { type: "nextQuestion"; payload: null }) => void;
  answer: number;
}) => {
  if (answer === null) return null;
  return (
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
  );
};
