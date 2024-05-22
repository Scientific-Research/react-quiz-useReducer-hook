import { IQuestion } from "../interfaces/interfaces";

export const Progress = ({
  index,
  questions,
  points,
}: {
  index: number;
  questions: IQuestion[];
  points: number;
}) => {
  let maxPossiblePoints = 0;
  maxPossiblePoints = maxPossiblePoints + points;
  return (
    <>
      <header className="progress">
        <p>
          Question <strong>{index + 1}</strong> / {questions.length}
        </p>

        <p>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </header>
    </>
  );
};
