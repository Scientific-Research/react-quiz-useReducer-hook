import { useEffect } from "react";

import questions from "../../data/questions.json";
import { IQuestion } from "../interfaces/interfaces";

export const useFetchQuestions = (
  dataReceived: "dataReceived" | "dataFailed",
  dataFailed: "dataReceived" | "dataFailed",
  // dispatch: {
  //   (value: any): void;
  //   (arg0: { type: any; payload: any }): void;
  // }
  dispatch: // (value: any): void;
  (arg0: {
    type: "dataReceived" | "dataFailed" | "start";
    payload: IQuestion[];
  }) => void
) => {
  useEffect(() => {
    const getQuestions = () => {
      try {
        // const data = await fetch("http://localhost:8000/questions");
        // const res = await data.json();

        const res = questions.questions.map((q) => q);
        console.log(res);
        dispatch({ type: dataReceived, payload: res });
      } catch (error) {
        dispatch({ type: dataFailed, payload: [] });
      }
    };
    getQuestions();
  }, [dispatch]);
};
