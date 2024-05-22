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
  // let maxPossiblePoints = 0;
  // maxPossiblePoints = maxPossiblePoints + points;
  // or we can use reducer in JavaScript:
  const maxPossiblePoints = questions.reduce((cur, acc) => cur + acc.points, 0);

  return (
    <>
      <header className="progress">
        <progress max={questions.length} value={index} />
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
