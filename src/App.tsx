import Header from "./components/Header";
import { Main } from "./components/main";
import { FetchQuestions } from "./components/FetchQuestions";

export default function App() {
  FetchQuestions();

  return (
    <div className="App">
      {/* <DateCounter /> */}
      <Header />
      <Main />
    </div>
  );
}
