import { useEffect } from "react";

export const useFetchQuestions = (
  dataReceived: "dataReceived" | "dataFailed",
  dataFailed: "dataReceived" | "dataFailed",
  // dispatch: {
  //   (value: any): void;
  //   (arg0: { type: any; payload: any }): void;
  // }
  dispatch: // (value: any): void;
  (arg0: { type: "dataReceived" | "dataFailed"; payload: [] }) => void
) => {
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await fetch("http://localhost:8000/questions");
        const res = await data.json();
        console.log(res);
        dispatch({ type: dataReceived, payload: res });
      } catch (error) {
        dispatch({ type: dataFailed, payload: [] });
      }
    };
    getQuestions();
  }, []);
};
