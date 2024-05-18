/* 
export const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className="main">{children}</main>;
};
*/

import Loader from "./Loader";
import Error from "./Error";

export const Main = ({ state }: any) => {
  const { question, status } = state;
  return (
    <>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
    </>
  );
};
