import { IQuestion } from "../interfaces/interfaces";

export const Progress = ({
  index,
  questions,
}: {
  index: number;
  questions: IQuestion[];
}) => {
  return (
    <>
      <header className="progress">
        <p>
          Question <strong>{index + 1}</strong> / {questions.length}
        </p>
      </header>
    </>
  );
};
