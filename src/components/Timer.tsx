import { useEffect } from "react";

export const Timer = ({
  dispatch,
  secondsRemaining,
}: {
  dispatch: (arg0: { type: "tick"; payload: null }) => void;
  secondsRemaining: number;
}) => {
  // displaying the min and sec together:
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      // console.log("tick");
      dispatch({
        type: "tick",
        payload: null,
      });
    }, 1000);
    // to clear up the timer(unmount the timer), once we start the quiz again!
    return () => clearInterval(id);
  }, [dispatch]);
  // return <div className="timer">{secondsRemaining}</div>;
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
};
