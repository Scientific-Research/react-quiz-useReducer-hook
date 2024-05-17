import { useEffect } from "react";

export const FetchQuestions = () => {
  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetch("http://localhost:8000/questions");
      const res = await data.json();
      console.log(res);
    };
    getQuestions();
  }, []);
};
