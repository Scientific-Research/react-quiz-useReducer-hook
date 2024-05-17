import { useEffect } from "react";
import Header from "./components/Header";
import { Main } from "./components/main";

export default function App() {
  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetch("http://localhost:8000/questions");
      const res = await data.json();
      console.log(res);
    };
    getQuestions();
  }, []);

  return (
    <div className="App">
      {/* <DateCounter /> */}
      <Header />
      <Main />
    </div>
  );
}
