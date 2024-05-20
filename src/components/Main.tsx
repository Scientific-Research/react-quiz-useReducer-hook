/* 
export const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className="main">{children}</main>;
};
*/

import Loader from "./Loader";
import Error from "./Error";
import { StartScreen } from "./StartScreen";

export const Main = ({
  questions,
  status,
}: {
  questions: {};
  status: string;
}) => {
  // console.log(questions);
  return (
    <>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen questions={questions} />}
    </>
  );
};
