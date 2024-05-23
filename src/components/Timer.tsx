import { useEffect } from "react";

export const Timer = () => {
  useEffect(() => {
    setInterval(() => {
      console.log("tick");
    }, 1000);
  }, []);
  return <div className="timer">05:00</div>;
};
