import { useEffect } from "react";

export const Timer = ({
  dispatch,
  secondRemaining,
}: {
  dispatch: (arg0: { type: "tick"; payload: null }) => void;
  secondRemaining: number;
}) => {
  useEffect(() => {
    setInterval(() => {
      // console.log("tick");
      dispatch({
        type: "tick",
        payload: null,
      });
    }, 1000);
  }, [dispatch]);
  return <div className="timer">{secondRemaining}</div>;
};
