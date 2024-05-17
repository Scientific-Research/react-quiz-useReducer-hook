import { useEffect } from "react";

export const useFetchQuestions = (
  dataReceived: string,
  dataFailed: string,
  dispatch: {
    (value: any): void;
    (arg0: { type: string; payload: Response }): void;
  }
) => {
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await fetch("http://localhost:8000/questions");
        const res = await data.json();
        console.log(res);
        dispatch({ type: dataReceived, payload: res });
      } catch (error) {
        dispatch({ type: dataFailed });
      }
    };
    getQuestions();
  }, []);
};
